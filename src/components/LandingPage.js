import React, { useRef, useEffect } from 'react';
import { TweenMax, Back } from 'gsap';
import { FaGithubSquare } from 'react-icons/fa';

const LandingPage = () => {
	let logoElement = useRef(null);
	let textElement = useRef(null);

	useEffect(() => {
		console.log(logoElement);
		TweenMax.from(logoElement, 2, { x: 300, opacity: 0, scale: 0.5 });
		TweenMax.from(textElement, 2, {
			x: -300,
			opacity: 0,
			scale: 0.5,
			ease: Back.ease
		});
	}, []);

	function scaleUp() {
		TweenMax.to(logoElement, 1, {
			scale: 1.25,
			ease: Back.ease
		});
	}

	function scaleDown() {
		TweenMax.to(logoElement, 1, {
			scale: 0.75
		});
	}

	return (
		<div className="flexCon">
			<a
				href="https://github.com/gavin-dreyer"
				onMouseEnter={scaleUp}
				onMouseLeave={scaleDown}
				ref={element => {
					logoElement = element;
				}}
			>
				<FaGithubSquare className="githubIcon" />
			</a>
			<p
				ref={element => {
					textElement = element;
				}}
				id="aboutText"
			>
				{/* Welcome to my site! I'm Gavin, a full stack web developer that primarily
				works in React/Node with JavaScript, while also being competent in
				working with Python. I am passionate about programming because I love
				building things that help people improve themselves or keep track of
				their data. You can check out my recent projects{' '}
				<a href="https://gavindreyer.com/portfolio">here </a>and what I'm
				currently working on in GitHub above. */}
			</p>
		</div>
	);
};

export default LandingPage;
