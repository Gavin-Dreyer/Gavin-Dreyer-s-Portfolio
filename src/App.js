import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<Router>
			<div className="App">
				<Route component={NavBar} />
				<Route exact path="/" component={LandingPage} />
				<Route path="/about" component={About} />
				<Route path="/Portfolio" component={Portfolio} />
			</div>
		</Router>
	);
}

export default App;
