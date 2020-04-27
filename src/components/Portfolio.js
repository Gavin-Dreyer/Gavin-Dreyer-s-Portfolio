import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';

const Portfolio = () => {
	const [project, setProject] = useState(1);

	const navigateUp = () => {
		if (project === 1) {
			setProject(2);
		} else if (project === 2) {
			setProject(3);
		} else if (project === 3) {
			setProject(1);
		}
	};

	const navigateDown = () => {
		if (project === 3) {
			setProject(2);
		} else if (project === 2) {
			setProject(1);
		} else if (project === 1) {
			setProject(3);
		}
	};

	return (
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
	);
};

export default Portfolio;
