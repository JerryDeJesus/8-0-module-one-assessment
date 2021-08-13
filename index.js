/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(moviesArr) {
  let movieTitles = [];
  if(!moviesArr.length){
    return moviesArr;
  }
  for(let movie of moviesArr){
    movieTitles.push(movie.title);
  }
  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(moviesArr) {
  let highScore = 0;

  for(let movie of moviesArr){
    if(highScore < Number(movie.metascore)){
      highScore = Number(movie.metascore);
    }
  }
  return highScore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(moviesArr) {
  let avgRating = 0;
  if(!moviesArr.length){
    return avgRating;
  }
  for(let movie of moviesArr){
    avgRating += Number(movie.imdbRating);
  }
  avgRating /= moviesArr.length;
  return avgRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(moviesArr) {
  let moviesObj = {};
  if(!moviesArr.length){
    return moviesObj;
  }
  let grab = [];

  for(let i = 0; i < moviesArr.length; i++){
    grab.push(moviesArr[i].rated);
    moviesObj[moviesArr[i].rated] = 0;
  }
  for(let j = 0; j < grab.length; j++){
    if(grab[j] === 'G'){
      moviesObj["G"] += 1;
    }else if(grab[j] === 'PG'){
      moviesObj["PG"] += 1;
    } else if(grab[j] === 'PG-13'){
      moviesObj["PG-13"] += 1;
    }
  }
  return moviesObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(moviesArr, id) {
  let moviesObj = {};
  if(!moviesArr.length){
    return null;
  }
  for(let movie of moviesArr){
    if(id === movie.imdbID){
      return movie;
    }
  }
  return null;
}


/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(moviesObj, genre) {

  function capitalize(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  let genreArr = [];
  for(let movie of moviesObj){
    if(movie.genre.includes(capitalize(genre))){
      genreArr.push(movie);
    }
  }
  return genreArr;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(moviesArr, year) {
  let releasedArr = [];
  for(let movie of moviesArr){
    if(Number(movie.released.slice(movie.released.length-4)) <= year){
      releasedArr.push(movie);
    }
  }
  return releasedArr;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(moviesArr) {
  function moneyFormatter(money){
    let formattedMoney = money.replaceAll(',','');
    formattedMoney = Number(formattedMoney.replace('$',''));
    return formattedMoney;
  }
  
  let moneyMovie = {};
  let mostProfit = 0;
  if(!moviesArr.length){
    return null;
  }
  for(let i = 0; i < moviesArr.length; i++){
    if(mostProfit <= moneyFormatter(moviesArr[i].boxOffice)){
      mostProfit = moneyFormatter(moviesArr[i].boxOffice);
    }
  }
  for(let movie of moviesArr){
    if(mostProfit === moneyFormatter(movie.boxOffice)){
      moneyMovie = movie.title;
    }
  }
  return moneyMovie;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
