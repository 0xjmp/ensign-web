var ActionTypes = CandidateConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _candidates = [];
var _currentCandidate;

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
    new ApiRequest().request('get', '/candidates.json', function(response) {
      _candidates = response.candidates;
      CandidateStore.emitChange();
    });
  },

  nextCandidate: function() {
    var index = _candidates.indexOf(_currentCandidate);
    if (index < _candidates.length) {
      _currentCandidate = _candidates[index + 1];
      CandidateStore.emitChange();
    } else {
      // TODO: Fetch more candidates
    }
  }

});

CandidateStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    case ActionTypes.GET_CANDIDATES:
      CandidateStore.fetchCandidates();
      break;

    case ActionTypes.NEXT_CANDIDATE:
      CandidateStore.nextCandidate(action.result);
      break;

    default:
      break;
  }

});