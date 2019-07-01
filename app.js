const http = new simpleHTTP();

// GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(
//   error,
//   response
// ) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(response);
//   }
// });

// POST a new post (Confusing isn't it?)
const data = {
  title: 'Custom post',
  body: 'This a custom post'
};
