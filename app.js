const http = new simpleHTTP();

// GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function(response) {
  console.log(response);
});
