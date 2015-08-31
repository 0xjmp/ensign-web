var CHANGE_EVENT = 'change';

var _stack = gajus.Swing.Stack();

_stack.on('throwout', function(element) { 
  AppDispatcher.dispatch({
    type: CandidateConstants.ActionTypes.NEXT_CANDIDATE,
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

    case ActionTypes.SETUP_CARDS:
      CardStore.setup();
      break;

    default:
      break;
  }

  CardStore.emitChange();

});