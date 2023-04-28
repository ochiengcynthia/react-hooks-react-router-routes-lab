import React from 'react';
import { actors, movies } from '../data';

function Actors (){
  return (
    <div className="actors">
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {movies
              .filter((movie) => movie.actorIds.includes(actor.id))
              .map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
