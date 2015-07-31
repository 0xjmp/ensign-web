var ActionTypes = CandidateConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _candidates = [];

function fetchCandidates() {
  Api.request('get', '/candidates.json', function(candidates) {
    _candidates = candidates;
    CandidateStore.emitChange();
  });
};

var CandidateStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _candidates[id];
  },

  getState: function() {
    return _candidates;
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