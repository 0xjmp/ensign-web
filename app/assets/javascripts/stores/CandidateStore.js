var ActionTypes = CandidateConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _api = new ApiRequest();

var _candidates = [];
var _interests = {}; // TODO: refactor into separate store
var _page;

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

  fetchCandidates: function() {
    _api.setParams({page: _page});
    _api.request('get', '/candidates.json', function(response) {
      _candidates = response.candidates;
      CandidateStore.emitChange();
    });
  },

  sendResults: function(callback) {
    _api.setParams({results: _interests});
    _api.request('post', '/candidates/results.json', function(response) {
      _interests = [];
      callback();
    });
  },

  nextCandidate: function(result) {
    if (result !== undefined && _candidates.length > 0) {
      var id = _candidates[_candidates.length - 1].id;
      _interests[id] = result;
    }

    if (_candidates.length === 1) {
      function fetchNext() {
        _page++;
        CandidateStore.fetchCandidates(_page);
      };

      if (Object.keys(_interests).length > 0) {
        CandidateStore.sendResults(function() {
          fetchNext();
        });
      } else {
        fetchNext();
      }
    } else if (_candidates.length > 0) {
      _candidates.splice(-1,1);
      CandidateStore.emitChange();
    }
  }

});

CandidateStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    case ActionTypes.GET_CANDIDATES:
      _page = 1;
      CandidateStore.fetchCandidates();
      break;

    case ActionTypes.NEXT_CANDIDATE:
      CandidateStore.nextCandidate(action.result);
      break;

    default:
      break;
  }

});