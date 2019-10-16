import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'


import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path='/about' component={About} />
        <Route exact path='/' component={LandingPage} />
      </div>
    </Router>
    
  );
}

export default App;
