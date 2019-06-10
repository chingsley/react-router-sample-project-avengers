import React from 'react';
import './Avenger.css';

const Avenger = ({av}) => {
  return(
    <div className="avenger-card">
      <div className="img-container">
        <img src={av.img} alt="" />
      </div>
      <div className="avenger-info">
        <p>name: <span>{av.name}</span></p>
        <p>nickname: <span>{av.nickname}</span></p>
        <p>description: <span>{av.description}</span></p>
        <p>description: <span>{av.description}</span></p>
        <p>moviies: <span>{av.movies.map(movie => movie,)}</span></p>
      </div>
      <div className="thumbnail-img-container"><img src={av.thumbnail} alt="" /></div>
    </div>
  );
}

export default Avenger;