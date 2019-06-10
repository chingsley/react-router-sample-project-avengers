import React from 'react';
import { Link } from 'react-router-dom';
import './Avenger.css';

const Avenger = ({av}) => {
  return(
    <div className="avenger-card">
      <div className="img-container">
        <img src={av.img} alt="" />
      </div>
      <div className="avenger-info">
        <h3><span><Link to={`/avengers/${av.id}`}>{av.name}</Link></span></h3>
        <p>nickname: <span>{av.nickname}</span></p>
        <p>description: <span>{av.description}</span></p>
        <p>moviies: <span>{av.movies.map(movie => movie,)}</span></p>
      </div>
      <div className="thumbnail-img-container"><img src={av.thumbnail} alt="" /></div>
    </div>
  );
}

export default Avenger;