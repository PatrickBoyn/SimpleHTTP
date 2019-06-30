const http = new simpleHTTP();

// GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function(
  error,
  response
) {
  console.log(response);
});
