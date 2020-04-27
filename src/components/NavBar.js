import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	const [currentUrl, setCurrentUrl] = useState();

	useEffect(() => {
		setCurrentUrl(props.location.pathname);
	}, [props.location.pathname]);

	if (!currentUrl) {
		return <div>Loading...</div>;
	}

	let port = (
		<Link className="navBarLink2" to="/portfolio">
			Portfolio
		</Link>
	);

	let about = (
		<Link className="navBarLink2" to="/about">
			About
		</Link>
	);
	return (
		<div className="navBar">
			<Link className="navBarLink1" to="/">
				Gavin Dreyer
			</Link>
			{currentUrl.includes('about') ? port : about}
		</div>
	);
};

export default NavBar;
