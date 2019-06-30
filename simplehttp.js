function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// HTTP GET request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      console.log(self.http.responseText);
    }
  };

  this.http.send();
};
// HTTP POST request

// HTTP PUT request

//HTTP Delete request
