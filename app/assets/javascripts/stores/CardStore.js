var _api = new ApiRequest();

var _state = {
  cards: [],
  interests: {}, // TODO: refactor into it's own domain
  page: 1
};

var CHANGE_EVENT = 'change';

var _stack = gajus.Swing.Stack();

_stack.on('throwout', function(element) { 
  AppDispatcher.dispatch({
    type: CandidateConstants.ActionTypes.NEXT_CARD,
    result: (element.throwDirection === Card.DIRECTION_RIGHT)
  });
});

var CardStore = Object.assign({}, bean, {

  emitChange: function() {
    this.fire(this, CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(this, CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.off(this, CHANGE_EVENT, callback);
  },

  getState: function() {
    return _state;
  },

  fetchCards: function(model) {
    _api.setParams({page: _state.page});
    _api.request('get', '/' + model + '.json', function(response) {
      _state.cards = response.cards;
    });
  },

  sendResults: function(callback) {
    _api.setParams({results: _state.interests});
    _api.request('put', '/interests.json', function(response) {
      _state.interests = [];
      callback();
    });
  },

  nextCard: function(model, result) {
    if (result !== undefined && _state.cards.length > 0) {
      var id = _state.cards[_state.cards.length - 1].id;
      _state.interests[id] = result;
    }

    if (_state.cards.length === 1) {
      function fetchNext() {
        _state.page++;
        CardStore.fetchCards(_state.page);
      };

      if (Object.keys(_state.interests).length > 0) {
        CardStore.sendResults(function() {
          fetchNext();
        });
      } else {
        fetchNext();
      }
    } else if (_state.cards.length > 0) {
      _state.cards.splice(-1,1);
    }
  },

  setup: function() {
    var cardsEle = document.getElementsByClassName('card');
    if (cardsEle.length > 0) {
      for (var i = 0; i < cardsEle.length; i++) {
        var cardEle = cardsEle[i];
        _stack.createCard(cardEle);
      }
    } else {
      console.log('Error: no card elements found');
    }
  }

});

CardStore.dispatchToken = AppDispatcher.register(function(action) {
  var ActionTypes = CardConstants.ActionTypes;

  switch (action.type) {

    case ActionTypes.GET_CARDS:
      debugger;
      _state.page = 1;
      CardStore.fetchCards(action.model);
      break;

    case ActionTypes.NEXT_CARD:
      CardStore.nextCard(action.model, action.result);
      break;

    case ActionTypes.SETUP_CARDS:
      CardStore.setup();
      break;

    default:
      break;
  }

  CardStore.emitChange();
});