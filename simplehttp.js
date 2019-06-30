function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// HTTP GET request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);

  this.http.send();
};
// HTTP POST request

// HTTP PUT request

//HTTP Delete request
