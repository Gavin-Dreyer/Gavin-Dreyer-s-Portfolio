import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';

const Portfolio = () => {
	const [project, setProject] = useState(1);

	const navigate = () => {
		{
			project === 1 ? setProject(0) : setProject(1);
		}
	};

	return (
		<>
			<button onClick={() => navigate()}>CLICK ME</button>
			{project === 1 ? <Project3 /> : <Project2 />}
		</>
	);
};

export default Portfolio;
