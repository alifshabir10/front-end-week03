import React, { Component } from "react";
import Movie from "./movie";
import { movieData } from "../data/movie-data";
// import './movie.css';

export default class Listmovies extends Component {
  render() {
    const galery = movieData.map((movie) => {
      return (
        <Movie
          title={movie.title} 
          poster={movie.poster_path}
          date={movie.release_date}
          rating={movie.vote_average}
          hd={movie.video}
        />
      );
    });
    return <div className="movies">{galery}</div>;
  }
}
