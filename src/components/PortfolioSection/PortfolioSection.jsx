import React from 'react';
import './PortfolioSection.scss';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

const PortfolioSection = () => {
	const projects = [
		{
			name: 'Projekt Pizzeria',
			desc: 'Projekt strony pizzerii wraz z pełnym backendem (<span>MERN stack</span>).',
			year: '2024',
			stack: ['ReactJS', 'Vite', 'SCSS', 'Zustand', 'MongoDB'],
			imgs: ['vd-pizzeria(1).png', 'vd-pizzeria(2).png', 'vd-pizzeria(3).png'],
			more: '/projekty/2024/pizzeria',
		},
		{
			name: 'Poker Szop',
			desc: 'Strona e-sklepu przygotowana pod wersję komercyjną.',
			year: '2024',
			stack: ['ReactJS', 'Vite', 'TypeScript', 'TailwindCSS', 'Zustand'],
			imgs: [
				'vd-poker-szop(1).png',
				'vd-poker-szop(2).png',
				'vd-poker-szop(3).png',
			],
			href: 'https://poker-szop.netlify.app/',
			more: '/projekty/2024/poker-szop',
			github: 'https://github.com/VentusDev/vd-poker-szop/tree/master',
		},
		{
			name: 'Sfera Tarota',
			desc: 'Strona e-sklepu wraz z aplikacją losującą karty z wróżbą. Przygotowana pod wersję komercyjną.',
			year: '2024',
			stack: ['ReactJS', 'Vite', 'TypeScript', 'TailwindCSS', 'Zustand'],
			imgs: [
				'vd-sfera-tarota(1).png',
				'vd-sfera-tarota(2).png',
				'vd-sfera-tarota(3).png',
			],
			href: 'https://sfera-tarota.netlify.app/',
			more: '/projekty/2024/sfera-tarota',
			github: 'https://github.com/VentusDev/vd-sfera-tarota/tree/master',
		},
		{
			name: 'Ventus Trade Auta',
			desc: 'Przykładowy projekt sprzed lat służący prezentacji wystawianych pojazdów. Finalnie dane były wyciągane z panelu administracyjnego WordPressa. Aktualnie postanowiłam napisać w Expressie własny panel.',
			year: '2021',
			stack: [
				'ReactJS',
				'GatsbyJS',
				'GraphQl',
				'Context API',
				'Styled Components',
			],
			imgs: ['vd-auta(1).png', 'vd-auta(2).png', 'vd-auta(3).png'],
			href: 'https://ventus-trade-auta.netlify.app/',
		},
		{
			name: 'RoBud',
			desc: 'Prosty projekt strony prezentujący zakres oraz zasięg usług prywatnej firmy budowlanej. Statyczny, stworzony przy wykorzystaniu GatsbyJS z opcją dynamicznej zmiany języka.',
			year: '2021',
			stack: ['React.JS', 'Gatsby.JS', 'Styled Components', 'SCSS'],
			imgs: ['robud(1).png', 'robud(2).png', 'robud(3).png'],
			href: 'https://robud.netlify.app',
		},
		{
			name: 'Lwowskie Smaki',
			desc: 'Przykładowa struktura strony Foodtrucka, na którą spoglądam z sentymentem.',
			year: '2021',
			stack: ['React.JS', 'Gatsby.JS', 'GraphQl', 'Styled Components'],
			imgs: ['ls(1).png', 'ls(2).png', 'ls(3).png'],
			href: 'https://nervous-murdock-17fe79.netlify.app',
		},
	];

	return (
		<div className='portfolioSection'>
			{/* <div class="bg">
    <h1>Kiberbash</h1>
  </div> */}

			{projects.map((i) => (
				<PortfolioCard item={i} />
			))}
		</div>
	);
};

export default PortfolioSection;
