import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

const About = () => {
	let textElementTech = useRef(null);
	let textElementAbout = useRef(null);
	let picElement = useRef(null);

	useEffect(() => {
		TweenMax.from(textElementTech, 1, { x: 0, y: 300, opacity: 0, scale: 0.5 });
		TweenMax.from(textElementAbout, 1, {
			x: 0,
			y: 300,
			opacity: 0,
			scale: 0.5
		});
		TweenMax.from(picElement, 2, { x: 0, y: -300, opacity: 0, scale: 0.5 });
	});
	return (
		<div className="aboutCon">
			<div
				ref={element => {
					picElement = element;
				}}
				className="personalPic"
			></div>
			<p
				ref={element => {
					textElementTech = element;
				}}
				className="aboutText"
			>
				Hi! I'm Gavin Dreyer and I am a California based(but willing to
				relocate) full stack web developer. The programming languages I am most
				proficient with are JavaScript and Python. Most of my experience comes
				from building webApp clients in React in combination with Redux for
				state management. On the server side I am skilled at utilizing Node with
				Express in combination with Knex for queries in a RESTFUL API, or using
				GraphQL for a more dynamic approach. For databases, I am competent in
				Sqlite and PostgreSQL.
			</p>
			<p
				ref={element => {
					textElementAbout = element;
				}}
				className="aboutText"
			>
				Not only do I love learning programming languages, but I am also
				extremely into foreign languages as well! I have a strong background in
				Spanish, but I am currently teaching myself Portuguese. If I'm not
				learning a language, I'm usually caught up in something Baseball
				related. Go SF Giants! ⚾️
			</p>
		</div>
	);
};

export default About;
