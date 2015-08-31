var CHANGE_EVENT = 'change';

var _api = new ApiRequest();

var _state = {
  candidates: [],
  interests: {}, // TODO: refactor into it's own domain
  page: 1
};

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
    return _state;
  },

  fetchCandidates: function() {
    _api.setParams({page: _state.page});
    _api.request('get', '/candidates.json', function(response) {
      _state.candidates = response.candidates;
    });
  },

  sendResults: function(callback) {
    _api.setParams({results: _interests});
    _api.request('post', '/candidates/results.json', function(response) {
      _state.interests = [];
      callback();
    });
  },

  nextCandidate: function(result) {
    if (result !== undefined && _state.candidates.length > 0) {
      var id = _state.candidates[_state.candidates.length - 1].id;
      _state.interests[id] = result;
    }

    if (_state.candidates.length === 1) {
      function fetchNext() {
        _state.page++;
        CandidateStore.fetchCandidates(_state.page);
      };

      if (Object.keys(_interests).length > 0) {
        CandidateStore.sendResults(function() {
          fetchNext();
        });
      } else {
        fetchNext();
      }
    } else if (_state.candidates.length > 0) {
      _state.candidates.splice(-1,1);
    }
  }

});

CandidateStore.dispatchToken = AppDispatcher.register(function(action) {
  var ActionTypes = CandidateConstants.ActionTypes;

  switch (action.type) {

    case ActionTypes.GET_CANDIDATES:
      debugger;
      _state.page = 1;
      CandidateStore.fetchCandidates();
      break;

    case ActionTypes.NEXT_CANDIDATE:
      CandidateStore.nextCandidate(action.result);
      break;

    default:
      break;
  }

  CandidateStore.emitChange();
});