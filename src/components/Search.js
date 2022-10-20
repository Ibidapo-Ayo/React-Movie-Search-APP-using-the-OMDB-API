import React, { useState } from "react";
import axios from "axios";

function Search({ moviese }) {
  const [movies, setMovies] = useState([]);
  axios.get("http://www.omdbapi.com/?s=all&apikey=e2ac4824").then(response => {
    console.log(response);
    setMovies(response.data.Search);
  });
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);
  const [erro, setError] = useState([]);
  const changeText = event => {
    // console.log(event)
    setText(event.target.value);
  };

  const getMovie = e => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${text}&apikey=e2ac4824`)
      .then(response => {
        console.log(response);
        setMovie(response.data.Search);
      })
      .catch(error =>{
        setError(error)
      });
  };
  return (
    <>
      {" "}
      <div className="search">
        <div className="container">
          <form
            className="d-flex mx-auto media-flex"
            role="search"
            onSubmit={getMovie}
          >
            <input
              className="form-control me-2 searchBox"
              type="search"
              placeholder="Search for Movies"
              aria-label="Search"
              value={text}
              onChange={changeText}
            />
            <button className="btn searchBtn" type="submit">
              Search
            </button>
          </form>

          <br />
          <br />
          <br />
          {/* {text == "" ? null : getMovie ? (
        <h1>Searched Results for {text}</h1>
      ) : null} */}
          {movie.length > 1 ? (
            <h1 className="text-white m-5">Searched Results for {text}</h1>
          ) : (
            <h1>Oops... Sorry couldn't search</h1>
          )}
          <div className="row row-cols-1 row-cols-md-5 g-5">
            {movie.map(movie => (
              <div className="card text-bg-dark ml-10">
                <img src={movie.Poster} className="card-img" alt="..." />
                <div className="card-img-overlay bg-dark opacity text-left">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <p className="card-text">{movie.Type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row row-cols-1 row-cols-md-5 g-5">
            {movies.map(movie => (
              <div className="card text-bg-dark ml-10">
                <img src={movie.Poster} className="card-img" alt="..." />
                <div className="card-img-overlay bg-dark opacity text-left">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <p className="card-text">{movie.Type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
