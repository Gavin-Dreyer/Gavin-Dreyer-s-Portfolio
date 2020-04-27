import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
	return (
		<>
			<div className="portfolioPiece1">
				<a className="projectTitle" href="https://welldone.netlify.app/">
					WellDone Dashboard
				</a>
				<a className="projectImage" href="https://welldone.netlify.app/"></a>
				<p>
					A dashboard for the WellDone organization to display the current
					status and historical counts of individual wells
				</p>
				<p>Built with React, Redux, Node/Express, Knex, PostgreSQL</p>
				<ul>
					<li>
						Collaborated with 5 other web developers , 2 android developers, and
						2 UX designers to build out a dashboard based on a spec provided by
						the WellDone organization
					</li>
					<li>
						Personally worked directly with the android developers to integrate
						their platform into the existing Node API and Postgres DB
					</li>
					<li>
						Created numerous components for the Front End to dynamically display
						data which was scraped from the WellDone API and stored in our DB
						via our API
					</li>
				</ul>
				<p>
					Front End Repo:
					<a
						className="projectLinks"
						href="https://github.com/Lambda-School-Labs/well-done-fe"
					>
						https://github.com/Lambda-School-Labs/well-done-fe
					</a>
				</p>
				<p>
					Back End Repo:
					<a
						className="projectLinks"
						href="https://github.com/Lambda-School-Labs/well-done-be"
					>
						https://github.com/Lambda-School-Labs/well-done-be
					</a>
				</p>
			</div>
		</>
	);
};

export default Portfolio;
