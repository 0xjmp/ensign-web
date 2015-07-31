var CandidateActions = {
  get: function() {
    AppDispatcher.dispatch({
      actionType: CandidateConstants.GET_CANDIDATES
    });
  }
};