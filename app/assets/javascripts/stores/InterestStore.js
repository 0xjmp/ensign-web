var CHANGE_EVENT = 'change';

var _api = new ApiRequest();

var InterestStore = Object.assign({}, bean, {

  createInterest: function(model, id, result, callback) {
    _api.setParams({results: result});
    _api.request('post', '/' + model + '/' + id + '/interests.json', function(response) {
      if (callback) callback();
    });
  }
});

InterestStore.dispatchToken = AppDispatcher.register(function(action) {
  var ActionTypes = InterestConstants.ActionTypes;

  switch (action.type) {

    case ActionTypes.CREATE_INTEREST:
      debugger;
      InterestStore.createInterest(
        action.model, 
        action.id, 
        action.result, 
        action.callback
      );
      break;

    default:
      break;
  }
});