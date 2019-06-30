const http = new simpleHTTP();

// GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function(
  error,
  response
) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
});
