import React from "react";
import avengers from '../avengersData';
import './AvengersList.css';

import Avenger from './Avenger';

const AvengersList = () => (
  <div className="all-avengers-container">
    {avengers.map(avenger => <Avenger av={avenger} key={avenger.id} />)}
  </div>
);

export default AvengersList;
