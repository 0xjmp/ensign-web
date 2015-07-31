var ActionTypes = CandidateConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _candidates = [];

function fetchCandidates() {
  Api.request('get', '/candidates.json', function(candidates) {
    _candidates = candidates;
    CandidateStore.emitChange();
  });
};

var CandidateStore = Object.assign({}, bean, {

  emitChange: function() {
    this.fire(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.off(CHANGE_EVENT, callback);
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
      fetchCandidates();
      break;

    default:
      break;
  }

});