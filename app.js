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

// Create posts
// The post data to send
const data = {
  title: 'Custom post',
  body: 'This a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   error,
//   post
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Update posts
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//   error,
//   post
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

//Delete posts

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  error,
  posts
) {
  if (error) {
    console.log(error);
  } else {
    console.log(posts);
  }
});
