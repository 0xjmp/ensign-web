var _api = new ApiRequest();

var _state = {
  cards: [],
  page: 1
};

var CHANGE_EVENT = 'change';

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

  nextCard: function(model, card_id, result) {
    if (_state.cards.length === 1) {
      _state.page++;
      CardStore.fetchCards(model);
    } else if (_state.cards.length > 0) {
      _state.cards.splice(-1,1);
    }
  }

});

CardStore.dispatchToken = AppDispatcher.register(function(action) {
  var ActionTypes = CardConstants.ActionTypes;

  switch (action.type) {

    case ActionTypes.NEXT_CARD:
      action.card_id = _state.cards[_state.cards.length - 1].id;
      CardStore.nextCard(action.model, action.card_id, action.result);
      break;

    default:
      break;
  }

  CardStore.emitChange();
});