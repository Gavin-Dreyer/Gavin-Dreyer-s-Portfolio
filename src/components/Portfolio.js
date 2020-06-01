import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TweenMax, Back } from 'gsap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { Project1, Project1Image } from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';

const Portfolio = () => {
	let proj1 = useRef(null);
	let proj2 = useRef(null);
	let proj3 = useRef(null);

	let proj1Ref = useRef(null);

	const [project, setProject] = useState(1);

	const [project1, setProject1] = useState(true);

	const flipImg = useCallback(e => {
		console.log(
			e.target,
			e.target.parentNode.classList,
			e.target.children,
			e.type
		);
		if (e.type === 'mouseover') {
			if (e.target.classList.contains('imageCon1')) {
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
				}, 600);
			}
		} else if (e.type === 'mouseout') {
			if (e.target.parentNode.classList.contains('portfolio')) {
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
				}, 600);
			}
		}
	}, []);

	useEffect(() => {
		proj1.current.style.border = '1px solid black';
		proj1.current.style.padding = '5px 10px';

		proj1Ref.addEventListener('mouseover', flipImg);
		proj1Ref.addEventListener('mouseout', flipImg);

		return () => {
			proj1Ref.removeEventListener('mouseover', flipImg);
			proj1Ref.removeEventListener('mouseout', flipImg);
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

	// console.log(proj1Ref, curElement);
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
			<div
				className="portfolioProjects"
				ref={element => {
					proj1Ref = element;
				}}
			>
				<FaArrowLeft className="arrowBtn" onClick={() => navigateDown()} />

				{project === 1 ? (
					<div className="proj1Con">
						{project1 ? <Project1Image /> : <Project1 />}
					</div>
				) : null}
				{project === 2 ? (
					<div>
						<Project2 />
					</div>
				) : null}
				{project === 3 ? (
					<div>
						<Project3 />
					</div>
				) : null}

				<FaArrowRight className="arrowBtn" onClick={() => navigateUp()} />
			</div>
		</div>
	);
};

export default Portfolio;
