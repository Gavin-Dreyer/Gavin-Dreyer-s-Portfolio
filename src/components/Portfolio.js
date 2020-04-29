import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';

const Portfolio = () => {
	let proj1 = useRef(null);
	let proj2 = useRef(null);
	let proj3 = useRef(null);
	const [project, setProject] = useState(1);

	useEffect(() => {
		proj1.current.style.border = '1px solid black';
		proj1.current.style.padding = '5px 10px';
	}, []);

	const navigateUp = () => {
		if (project === 1) {
			setProject(2);

			proj2.current.style.border = '1px solid black';
			proj2.current.style.padding = '5px 10px';

			proj1.current.style.border = '';
			proj1.current.style.padding = '';
		} else if (project === 2) {
			setProject(3);

			proj3.current.style.border = '1px solid black';
			proj3.current.style.padding = '5px 10px';

			proj2.current.style.border = '';
			proj2.current.style.padding = '';
		} else if (project === 3) {
			setProject(1);

			proj1.current.style.border = '1px solid black';
			proj1.current.style.padding = '5px 10px';

			proj3.current.style.border = '';
			proj3.current.style.padding = '';
		}
	};

	const navigateDown = () => {
		if (project === 3) {
			setProject(2);

			proj2.current.style.border = '1px solid black';
			proj2.current.style.padding = '5px 10px';

			proj3.current.style.border = '';
			proj3.current.style.padding = '';
		} else if (project === 2) {
			setProject(1);

			proj1.current.style.border = '1px solid black';
			proj1.current.style.padding = '5px 10px';

			proj2.current.style.border = '';
			proj2.current.style.padding = '';
		} else if (project === 1) {
			setProject(3);

			proj3.current.style.border = '1px solid black';
			proj3.current.style.padding = '5px 10px';

			proj1.current.style.border = '';
			proj1.current.style.padding = '';
		}
	};

	return (
		<>
			<div className="carousel">
				<span className="carouselItem" ref={proj1}>
					{'■'}
				</span>
				<span className="carouselItem" ref={proj2}>
					{'■'}
				</span>
				<span className="carouselItem" ref={proj3}>
					{'■'}
				</span>
			</div>
			<div className="portfolio">
				<button className="arrowBtn" onClick={() => navigateDown()}>
					{'⬅'}
				</button>

				{project === 1 ? <Project1 /> : ''}
				{project === 2 ? <Project2 /> : ''}
				{project === 3 ? <Project3 /> : ''}

				<button className="arrowBtn" onClick={() => navigateUp()}>
					{'⮕'}
				</button>
			</div>
		</>
	);
};

export default Portfolio;
