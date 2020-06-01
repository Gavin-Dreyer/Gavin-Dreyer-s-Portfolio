import React from 'react';
import WellDone from '../../assets/welldone.png';
import Laptop from '../../assets/laptop.png';

export const Project1Image = () => {
	return (
		<div className="portfolioPiece">
			<a className="projectImage1" href="https://welldone.netlify.app/">
				<div className="imageCon1">
					<img src={Laptop} alt="laptop" className="laptop" />
					<img src={WellDone} alt="fresh well water" className="hoverImage" />
				</div>
			</a>
		</div>
	);
};

export const Project1 = () => {
	return (
		<div className="portfolioPiece">
			<a className="projectTitle" href="https://welldone.netlify.app/">
				WellDone Dashboard
			</a>
			<p>
				A dashboard for the WellDone organization to display the current status
				and historical counts of individual wells
			</p>
			<p>Built with React, Redux, Node/Express, Knex, PostgreSQL</p>
			<ul>
				<li>
					Collaborated with 5 other web developers , 2 android developers, and 2
					UX designers to build out a dashboard based on a spec provided by the
					WellDone organization
				</li>
				<li>
					Personally worked directly with the android developers to integrate
					their platform into the existing Node API and Postgres DB
				</li>
				<li>
					Created numerous components for the Front End to dynamically display
					data which was scraped from the WellDone API and stored in our DB via
					our API
				</li>
			</ul>
			<p className="projectLinks">
				Front End Repo:
				<a href="https://github.com/Lambda-School-Labs/well-done-fe">
					https://github.com/Lambda-School-Labs/well-done-fe
				</a>
			</p>
			<p className="projectLinks">
				Back End Repo:
				<a href="https://github.com/Lambda-School-Labs/well-done-be">
					https://github.com/Lambda-School-Labs/well-done-be
				</a>
			</p>
		</div>
	);
};
