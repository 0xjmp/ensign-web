var _baseUrl = '/api';

var _responseExtractor = function(response, callback) {
  // Attempt to extract the crucial data from api
  if (response.data) {
    callback(response.data);
  } else {
    callback(response);
  }
}

var Api = function() {
  this.headers = {};
  this.params = {};
};

Api.prototype.setHeaders = function(headers) {
  this.headers = headers;
  return this;
};

Api.prototype.setParams = function(params) {
  this.params = params;
  return this;
};

Api.prototype.request = function(method, path, callback) {
  var url = _baseUrl + path;
  var request = new XMLHttpRequest();
  if (callback) request.addEventListener('load', _responseExtractor(response, callback));
  request.open(method, url, true);
  request.send();
};
