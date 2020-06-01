import React from 'react';
import Ali from '../../assets/Conj.png';

export const Project2Image = () => {
	return (
		<div className="portfolioPiece2">
			<a
				className="projectImage2"
				alt="cartoon aligator"
				href="https://gdconjugator.netlify.app/"
			>
				<img src={Ali} className="imageCon2" />
			</a>
		</div>
	);
};

export const Project2 = () => {
	return (
		<div className="portfolioPiece2">
			<a className="projectTitle2" href="https://gdconjugator.netlify.app/">
				Conjugator
			</a>

			<p>A webApp used to practice conjugations of Spanish verbs</p>
			<p>
				Built with React, Redux, Node/Express, Knex, Sqlite, GraphQL, Apollo
			</p>
			<ul>
				<li>
					Created a database with over 600 verbs and nearly 12,000 total sets of
					conjugations
				</li>
				<li>
					Use a RESTFUL API to randomly select a verb based on parameters set by
					user's difficulty choice
				</li>
				<li>
					Created Queries with GraphQL to dynamically display conjugations of
					requested verb
				</li>
			</ul>
			<p className="projectLinks2">
				Front End Repo:
				<a href="https://github.com/Gavin-Dreyer/spanishConjugation">
					https://github.com/Gavin-Dreyer/spanishConjugation
				</a>
			</p>
			<p className="projectLinks2">
				GraphQL Server Repo:
				<a href="https://github.com/Gavin-Dreyer/spanish-verbs-graphql-server">
					https://github.com/Gavin-Dreyer/spanish-verbs-graphql-server
				</a>
			</p>
			<p className="projectLinks2">
				RESTFUL API Server Repo:
				<a href="https://github.com/Gavin-Dreyer/SpanishConj">
					https://github.com/Gavin-Dreyer/SpanishConj
				</a>
			</p>
		</div>
	);
};
