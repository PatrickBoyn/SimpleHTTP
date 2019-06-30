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
easyHTTP.prototype.post = function(url, data) {};
// HTTP PUT request

//HTTP Delete request
