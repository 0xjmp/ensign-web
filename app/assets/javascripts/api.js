var _baseUrl = '/api';

function _extractData(response) {
  // Custom data extractor for our back-end
  if (response.success) {
    if (response.data) {
      return response.data;
    }
  }
}

function _errorHandler(error) {
  debugger;
  switch (error.status) {
    case 404:
      break;

    case 500:
      break;

    case 401:
      break;

    default:
      break;
  }
}

var ApiRequest = function() {
  this._params = {};
};

ApiRequest.prototype.setParams = function(params) {
  this._params = JSON.stringify(params);
  return this;
};

ApiRequest.prototype.request = function(method, path, callback) {
  var url = _baseUrl + path;
  $.ajax({
    url: _baseUrl + path,
    type: method.toUpperCase(),
    data: this._params,
    contentType: 'application/json; charset=utf-8',
    success: function(response) {
      callback(_extractData(response));
    },
    error: _errorHandler
  });
};
