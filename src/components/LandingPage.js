import React, { useRef, useEffect } from 'react';
import { TweenMax, Back } from 'gsap';
import { FaGithubSquare } from 'react-icons/fa';

const skills = [
	'HTML',
	'CSS',
	'JavaScript',
	'Python',
	'React.js',
	'Redux',
	'Vue.js',
	'Node.js',
	'Express',
	'PostgreSQL',
	'Sqlite'
];

const LandingPage = () => {
	let logoElement = useRef(null);
	let textElement = useRef(null);
	let textElementDev = useRef(null);
	let textElementSkills = useRef(null);

	useEffect(() => {
		TweenMax.from(logoElement, 2, { x: 300, opacity: 0, scale: 0.5 });
		TweenMax.from(textElement, 2, {
			x: -300,
			opacity: 0,
			scale: 0.5,
			delay: 0.1,
			ease: Back.ease
		});
		TweenMax.from(textElementDev, 1.5, {
			opacity: 1,
			scale: 0.5,
			delay: 0.2,
			ease: Back.ease
		});
		TweenMax.from(textElementSkills, 1.5, {
			opacity: 1,
			scale: 0.5,
			delay: 0.3,
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
				Welcome! I'm Gavin!
			</p>
			<p
				id="aboutTextDev"
				ref={element => {
					textElementDev = element;
				}}
			>
				Full Stack Web Developer
			</p>
			<p
				id="aboutTextSkills"
				ref={element => {
					textElementSkills = element;
				}}
			>
				<span id="techSk">Technical Skills</span>
				<span id="techSkC">:</span>
				{skills.map((skill, index) => {
					return (
						<span className="skills" key={index}>
							{skill}
						</span>
					);
				})}
			</p>
		</div>
	);
};

export default LandingPage;
