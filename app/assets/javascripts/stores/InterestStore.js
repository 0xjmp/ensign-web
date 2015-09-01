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