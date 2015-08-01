var ActionTypes = CandidateConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _candidates = [];

var CandidateStore = Object.assign({}, bean, {

  emitChange: function() {
    this.fire(this, CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(this, CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.off(this, CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _candidates[id];
  },

  getState: function() {
    return {
      candidates: _candidates
    };
  }

});

CandidateStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    case ActionTypes.GET_CANDIDATES:
      new ApiRequest().request('get', '/candidates.json', function(response) {
        _candidates = response.candidates;
        CandidateStore.emitChange();
      });
      break;

    default:
      break;
  }

});