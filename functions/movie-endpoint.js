/* eslint-disable no-console */
const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event) => {

  const searchMovies = event.queryStringParameters.searchQuery;

  const endpointURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&language=en-US&page=1&include_adult=false&query=${searchMovies}`;


  try {
    const response = await fetch(endpointURL);
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
