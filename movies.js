// Define the Movie class
class Movie {
  // Private properties
  #title;
  #cast;
  #description;
  #rating;

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Method to update the rating
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display info
  displayInfo(label = "") {
    const movieInfoDiv = document.getElementById("movie-info");
    movieInfoDiv.innerHTML += `
      ${label ? `<h3>${label}</h3>` : ""}
      <h2>Title: ${this.#title}</h2>
      <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
      <p><strong>Description:</strong> ${this.#description}</p>
      <p><strong>Rating:</strong> ${this.#rating}</p>
      <hr>
    `;
  }

  // Getter for title
  get title() {
    return this.#title;
  }
}

// Create movie object
const movie1 = new Movie(
  "The Shawshank Redemption",
  ["Tim Robbins", "Morgan Freeman"],
  "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.",
  9.3
);

// Create collection (array)
const movies = [movie1];

// Display initial info
movie1.displayInfo("Original Information:");

// Function to update movie rating
function updateMovieRating(title, newRating) {
  for (let movie of movies) {
    if (movie.title === title) {
      movie.updateRating(newRating);
      return movie;
    }
  }
  return null;
}

// Update and display new info
const updatedMovie = updateMovieRating("The Shawshank Redemption", 9.5);

if (updatedMovie) {
  updatedMovie.displayInfo("Updated Rating:");
} else {
  console.error("Movie not found!");
}