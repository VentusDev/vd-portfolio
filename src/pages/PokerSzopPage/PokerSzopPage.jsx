import React, { useLayoutEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './PokerSzopPage.scss';
import '../ProjectPages.scss'

import Hero from './screenshots/hero.png';
import Contact from './screenshots/contact.png';
import Add from './screenshots/add.png';
import Cart from './screenshots/cart.png';


import { handleClick } from '../../utils/functions.jsx';

const PokerSzopPage = () => {
	const projectDetails = [
		{
			title: 'Frontend Stack',
			stack: 'React + Vite + TypeScript + Tailwind CSS + Zustand',
			details: [
				['scr', Hero, 'Poker Szop - landing'],
				['scr', Contact, 'Poker Szop - contact page'],
				['scr', Add, 'Poker Szop - add page'],
				['scr', Cart, 'Poker Szop - cart page'],
			]
		},
	];

	const aboutProject = [
		'Poker Szop to mały projekt e-sklepu z akcesoriami do gry mający na celu wykazanie umiejętności pisania kodu w TypeScrypcie oraz stylowaniu komponentów w oparciu o Tailwind CSS.',
		'Odnośnik do DEMO: <a href="https://poker-szop.netlify.app/" target="_blank">Poker Szop</a>',
		'Docelowo ma być wykonany backend (<span>MERN stack</span>)'
	];

	const elementsRef = useRef([]);

	const scrollX = window.scrollX;
	const scrollY = window.scrollY;

	useLayoutEffect(() => {
		window.scrollTo(scrollX, scrollY);
	});

	return (
		<ol
			style={{ '--length': projectDetails.length - 1 }}
			role='list'
			className='appDesc '
		>
			<div className='projectHeader pokerSzopHeader'>
				<h2>Projekt Poker Szop</h2>
				{aboutProject.map((item) => {
					const markup = { __html: item };
					return <p key={uuidv4()} dangerouslySetInnerHTML={markup}></p>;
				})}
			</div>

			{projectDetails.map((item, i) => (
				<li style={{ '--i': i }} key={uuidv4()}>
					<h3 ref={(el) => (elementsRef.current[i] = el)}>{item.title}</h3>
					<h4 className='pokerStack' style={{}}
						onClick={() =>
							handleClick(i, elementsRef, projectDetails.length, true)
						}
					>
						{item.stack}
					</h4>
					<span>{item.info}</span>
					<ol style={{ '--length': item.details.length }} role='list'>
						{item.details.map((i, x) => {
							if (i[0] === 'par') {
								const markup = { __html: i[1] };
								return (
									<li style={{ '--i': x + 1 }} key={uuidv4()}>
										<p key={uuidv4()} dangerouslySetInnerHTML={markup}></p>
									</li>
								);
							}
							if (i[0] === 'scr') {
								return (
									<li style={{ '--i': x + 1 }} key={uuidv4()}>
										<img
											className='screenImg'
											src={i[1]}
											alt={i[2]}
											loading='lazy'
										/>
									</li>
								);
							}
						})}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default PokerSzopPage;
