import React from 'react';
import { directors, movies } from '../data';

function Directors (){
  return (
    <div className="directors">
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {movies
              .filter((movie) => movie.directorId === director.id)
              .map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
