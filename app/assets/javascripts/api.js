var _baseUrl = '/api';

function _responseExtractor(response, callback) {
  // Custom data extractor for our back-end
  if (response.success) {
    if (response.data) {
      callback(response.data);
    } else {
      callback(response);
    }
  } else {
    // TODO: There was an error
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
      _responseExtractor(response, callback);
    },
    error: _errorHandler
  });
};
