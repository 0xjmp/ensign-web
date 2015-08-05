var ActionTypes = CandidateConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _candidates = [];
var _page = 0;

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

  getState: function() {
    return {
      candidates: _candidates
    };
  },

  getCurrentCandidate: function() {
    if (!_currentCandidate) {
      _currentCandidate = _candidates[0];
    }

    return _currentCandidate;
  },

  fetchCandidates: function(page) {
    var api = new ApiRequest();
    api.setParams({page: page});
    api.request('get', '/candidates.json', function(response) {
      _candidates = response.candidates;
      CandidateStore.emitChange();
    });
  },

  nextCandidate: function(result) {
    if (_candidates.length === 1) {
      CandidateStore.fetchCandidates(_page++);
    }

    if (_candidates.length > 0) {
      _candidates.splice(-1,1);
      CandidateStore.emitChange();
    }
  }

});

CandidateStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    case ActionTypes.GET_CANDIDATES:
      CandidateStore.fetchCandidates(_page = 0);
      break;

    case ActionTypes.NEXT_CANDIDATE:
      CandidateStore.nextCandidate(action.result);
      break;

    default:
      break;
  }

});