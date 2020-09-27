import React from 'react';
import {Switch, Route } from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage/homepage.component';

const PizzaPage = () => (
  <div>
    <h1>PIZZA PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/pizza' component={PizzaPage} />
      </Switch>
    </div>
  );
}

export default App;
