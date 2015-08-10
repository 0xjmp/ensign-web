var _baseUrl = '/api';

function _extractData(response) {
  // Custom data extractor for our back-end
  if (response.success) {
    if (response.data) {
      return response.data;
    }
  }
}

function _getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
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
  this._params = params;
  return this;
};

ApiRequest.prototype.request = function(method, path, callback) {
  var url = _baseUrl + path;
  $.ajax({
    headers: {
      'XSRF-TOKEN': _getCookie('XSRF-TOKEN')
    },
    url: _baseUrl + path,
    type: method.toUpperCase(),
    data: method === 'get' ? this._params : JSON.stringify(this._params),
    contentType: 'application/json; charset=utf-8',
    success: function(response) {
      callback(_extractData(response));
    },
    error: _errorHandler
  });
};
