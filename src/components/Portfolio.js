import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TweenMax, Back } from 'gsap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { Project1, Project1Image } from './projects/Project1';
import { Project2, Project2Image } from './projects/Project2';
import { Project3, Project3Image } from './projects/Project3';

const Portfolio = () => {
	let proj1 = useRef(null);
	let proj2 = useRef(null);
	let proj3 = useRef(null);

	let proj1Ref = useRef(null);

	const [project, setProject] = useState(1);

	const [project1, setProject1] = useState(true);
	const [project2, setProject2] = useState(true);
	const [project3, setProject3] = useState(true);

	const flipImg = useCallback(e => {
		console
			.log
			// e.target,
			// e.target.parentNode.classList,
			// e.target.classList,
			// project1,
			// e.type
			();
		if (e.type === 'mouseover') {
			if (
				e.target.classList.contains(`imageCon${project}`) &&
				(project1 || project2 || project3)
			) {
				TweenMax.to(e.target, 0.5, {
					opacity: 0,
					scale: 1,
					ease: Back.ease
				});
				setTimeout(() => {
					TweenMax.to(e.target, 0.5, {
						opacity: 1,
						scale: 1,
						ease: Back.ease
					});
					setProject1(false);
					setProject2(false);
					setProject3(false);
				}, 510);
			}
		} else if (e.type === 'mouseleave') {
			if (e.target.classList.contains('portfolioProjectsCon')) {
				TweenMax.to(e.target, 0.5, {
					opacity: 0,
					scale: 1,
					ease: Back.ease
				});
				setTimeout(() => {
					TweenMax.to(e.target, 0.5, {
						opacity: 1,
						scale: 1,
						ease: Back.ease
					});
					setProject1(true);
					setProject2(true);
					setProject3(true);
				}, 600);
			}
		}
	});

	useEffect(() => {
		proj1.current.style.border = '1px solid black';
		proj1.current.style.padding = '5px 10px';
	}, []);

	useEffect(() => {
		window.addEventListener('mouseover', flipImg);
		proj1Ref.current.addEventListener('mouseleave', flipImg);

		return () => {
			window.removeEventListener('mouseover', flipImg);
			proj1Ref.current.removeEventListener('mouseleave', flipImg);
		};
	}, [flipImg]);

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
		<div className="portfolio">
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
			<div className="portfolioProjects">
				<FaArrowLeft className="arrowBtn" onClick={() => navigateDown()} />
				<div className="portfolioProjectsCon" ref={proj1Ref}>
					{project === 1 ? project1 ? <Project1Image /> : <Project1 /> : null}
					{project === 2 ? project2 ? <Project2Image /> : <Project2 /> : null}
					{project === 3 ? project3 ? <Project3Image /> : <Project3 /> : null}
				</div>

				<FaArrowRight className="arrowBtn" onClick={() => navigateUp()} />
			</div>
		</div>
	);
};

export default Portfolio;
