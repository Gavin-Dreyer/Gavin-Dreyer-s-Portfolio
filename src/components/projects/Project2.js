import React from 'react';

const Project2 = () => {
	return (
		<div className="portfolioPiece">
			<a className="projectTitle" href="https://conjugatorlambda.netlify.app/">
				Conjugator
			</a>
			<a
				className="projectImage2"
				href="https://conjugatorlambda.netlify.app/"
			></a>
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
			<p className="projectLinks">
				Front End Repo:
				<a href="https://github.com/Gavin-Dreyer/spanishConjugation">
					https://github.com/Gavin-Dreyer/spanishConjugation
				</a>
			</p>
			<p className="projectLinks">
				GraphQL Server Repo:
				<a href="https://github.com/Gavin-Dreyer/spanish-verbs-graphql-server">
					https://github.com/Gavin-Dreyer/spanish-verbs-graphql-server
				</a>
			</p>
			<p className="projectLinks">
				RESTFUL API Server Repo:
				<a href="https://github.com/Gavin-Dreyer/SpanishConj">
					https://github.com/Gavin-Dreyer/SpanishConj
				</a>
			</p>
		</div>
	);
};

export default Project2;
