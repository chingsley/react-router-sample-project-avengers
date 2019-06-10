import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AvengersList from './components/AvengersList';

function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/avengers" component={AvengersList}/>
    </>
  );
}

export default App;
