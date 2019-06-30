function simpleHTTP() {
  this.http = new XMLHttpRequest();
}

// HTTP GET request
simpleHTTP.prototype.get = function(url, callBack) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callBack(self.http.responseText);
    }
  };

  this.http.send();
};
// HTTP POST request

// HTTP PUT request

//HTTP Delete request
