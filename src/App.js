import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Welcome from './Components/welcome/welcome';
import LandingPage from './Container/LandingPage';
import Game from './Components/Game/Game';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Welcome}/>
        <Route path='/landingpage' exact component={LandingPage} />
        <Route path='/game' exact component={Game} />
      </div>
    </BrowserRouter>
  );
}

export default App;
