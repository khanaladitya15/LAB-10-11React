import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import request from 'browser-request';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // return (
  //   <>
  //     <Navbar />
  //     <div>
  //       <Container />
  //     </div>
  //   </>
  // );
  const [searchTerm, setSearchTerm] = useState('');
  const [movieData, setMovieData] = useState(null);

  const apiKey = '91912dc4';

  const fetchMovieData = () => {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    request({ url: apiUrl, json: true }, (error, response, body) => {
      if (error) {
        console.error('Error fetching data:', error);
      } else if (response.statusCode === 200) {
        setMovieData(body.Search);
      } else {
        console.error('Unable to fetch data:', response.statusCode);
      }
    });
  };

  const renderMovieData = () => {
    if (movieData) {
      return movieData.map((movie) => (
        <div className="col-md-4 mb-4" key={movie.imdbID}>
          <div className="card h-100">
            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Year}</p>
            </div>
          </div>
        </div>
      ));
    }
    return null;
  };

  return (
    <>
      <Navbar />
      <div>
        <Container />
      </div>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Search Movie</h1>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button className="btn btn-success ms-3" onClick={fetchMovieData}>
          Search
        </button>
      </div>
      <div className="row mt-4">{renderMovieData()}</div>
    </div>
    </>
  );
}
export default App;

