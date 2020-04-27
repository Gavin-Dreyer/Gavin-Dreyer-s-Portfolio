import React from 'react';

const Project3 = () => {
	return (
		<div className="portfolioPiece">
			<a className="projectTitle" href="https://lambdasomnus.netlify.app/">
				Somnus
			</a>
			<a className="projectImage3" href="https://lambdasomnus.netlify.app/"></a>
			<p>
				A webApp used to store and display information about each night of sleep
				you record
			</p>
			<p>Built with React, Redux, ChartJs, Node/Express, Knex, Sqlite</p>
			<ul>
				<li>
					Collaborated with one other Front End Developer and one other Back End
					Developer for one week to implement the webApp based on a spec
					provided by a UX designer
				</li>
				<li>
					Handled all CRUD operations on the Front End pertaining to sleep
					entries by the user
				</li>
				<li>
					Created a Chart with ChartJs to display information over a set period
					of time based on the user's feelings
				</li>
				<li>Created an alarm for the user</li>
			</ul>
			<p>
				Front End Repo:
				<a
					className="projectLinks"
					href="https://github.com/Build-Week-Sleep-Tracker-Oct/Front-End"
				>
					https://github.com/Build-Week-Sleep-Tracker-Oct/Front-End
				</a>
			</p>
		</div>
	);
};

export default Project3;
