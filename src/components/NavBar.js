import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div className="navBar">
			<Link className="navBarLink1" to="/">
				Home
			</Link>
			<Link className="navBarLink1" to="/about">
				About
			</Link>
			<Link className="navBarLink2" to="/portfolio">
				Portfolio
			</Link>

			<Link className="navBarLink2" to="/contact">
				Contact
			</Link>
		</div>
	);
};

export default NavBar;
