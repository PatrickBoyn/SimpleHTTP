function simpleHTTP() {
  this.http = new XMLHttpRequest();
}

// HTTP GET request
simpleHTTP.prototype.get = function(url, callBack) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // First will check for an error.
      callBack(null, self.http.responseText);
    } else {
      callBack(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};
// HTTP POST request
simpleHTTP.prototype.post = function(url, data, callBack) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callBack(`${self.http.responseText}`);
  };

  this.http.send(JSON.stringify(data));
};
// HTTP PUT request
simpleHTTP.put = function(url, data, callBack) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
};
//HTTP Delete request
