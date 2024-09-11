const request = require('request');
request('https://ghibliapi.herokuapp.com/films', (error, response, body) =>
 if (error) {
 console.error(`Could not send request to API: ${error.message}`);
 return;
 }
 if (response.statusCode != 200) { console.error('Expected status');
 return;
 }
 console.log('Processing our list of movies');
 movies = JSON.parse(body);
 movies.forEach(movie => {
 console.log(`${movie['title']}, ${movie['release_date']}`);
 });
});

