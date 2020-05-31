import React, { useState, useRef, useEffect } from 'react';
import { TweenMax, Back } from 'gsap';
import { Link } from 'react-router-dom';

const NavBar = props => {
	let link1 = useRef(null);
	let link2 = useRef(null);
	let link3 = useRef(null);
	let link4 = useRef(null);

	const [l1Class, setL1Class] = useState('navBarLink1Load');
	const [l2Class, setL2Class] = useState('navBarLink2Load');
	const [divClass, setDivClass] = useState('linkConLoad');
	const [hidden, setHidden] = useState(true);
	const [hidden1, setHidden1] = useState(false);

	const transition = () => {
		divClass === 'linkConLoad'
			? setDivClass('linkCon')
			: setDivClass('linkConLoad');

		l1Class === 'navBarLink1Load'
			? setL1Class('navBarLink1')
			: setL1Class('navBarLink1Load');

		l2Class === 'navBarLink2Load'
			? setL2Class('navBarLink2')
			: setL2Class('navBarLink2Load');

		setTimeout(() => {
			hidden ? setHidden(false) : setHidden(true);

			hidden1 ? setHidden1(false) : setHidden1(true);
		}, 1400);
	};

	useEffect(() => {
		transition();
	}, []);

	useEffect(() => {
		if (!hidden) {
			TweenMax.from(link1, 1, {
				opacity: 0,
				scale: 1,
				delay: 0.6,
				ease: Back.ease
			});
			TweenMax.from(link2, 1, {
				opacity: 0,
				scale: 1,
				delay: 0.7,
				ease: Back.ease
			});
			TweenMax.from(link3, 1, {
				opacity: 0,
				scale: 1,
				delay: 0.8,
				ease: Back.ease
			});
			TweenMax.from(link4, 1, {
				opacity: 0,
				scale: 1,
				delay: 0.9,
				ease: Back.ease
			});
		}
	}, [hidden]);

	return (
		<div className="navBar">
			{/* <button onClick={() => transition()}></button> */}
			{hidden1 ? null : <div className={divClass + '1'}>Home</div>}
			{hidden ? null : (
				<div className="flyOut">
					<Link
						className={l1Class}
						to="/"
						// hidden={hidden}
						ref={element => {
							link1 = element;
						}}
					>
						Home
					</Link>
				</div>
			)}
			{hidden1 ? null : <div className={divClass + '2'}>About</div>}
			{hidden ? null : (
				<div className="flyOut">
					<Link
						className={l1Class}
						to="/about"
						ref={element => {
							link2 = element;
						}}
					>
						About
					</Link>
				</div>
			)}
			{hidden1 ? null : <div className={divClass + '3'}>Portfolio</div>}
			{hidden ? null : (
				<div className="flyOut">
					<Link
						className={l2Class}
						to="/portfolio"
						ref={element => {
							link3 = element;
						}}
					>
						Portfolio
					</Link>
				</div>
			)}
			{hidden1 ? null : <div className={divClass + '4'}>Contact</div>}
			{hidden ? null : (
				<div className="flyOut">
					<Link
						className={l2Class}
						to="/contact"
						ref={element => {
							link4 = element;
						}}
					>
						Contact
					</Link>
				</div>
			)}
		</div>
	);
};

export default NavBar;
