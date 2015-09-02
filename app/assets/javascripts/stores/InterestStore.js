var CHANGE_EVENT = 'change';

var _api = new ApiRequest();

var InterestStore = Object.assign({}, bean, {

  createInterest: function(model, id, result, callback) {
    _api.setParams({result: result});
    _api.request('post', '/' + model + '/' + id + '/interests.json', function(response) {
      if (callback) callback();
    });
  }

});

InterestStore.dispatchToken = AppDispatcher.register(function(action) {
  var ActionTypes = InterestConstants.ActionTypes;

  switch (action.type) {

    case CardConstants.ActionTypes.NEXT_CARD:
      AppDispatcher.waitFor([CardStore.dispatchToken]);
      InterestStore.createInterest(action.model, action.card_id, action.result);
      break;
      
  }
});