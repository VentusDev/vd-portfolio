import React, { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
	CSS3,
	Gimp,
	GIT,
	HTML5,
	Inksacpe,
	JavaScript,
	MongoDB,
	ReactJs,
} from './icons';
import Skill from '../Skill/Skill';

const Skills = forwardRef((props, ref) => {
	const aboutSkills = [
		'Przygodę z programowniem rozpoczęłam pod koniec <span>2019</span> roku, czerpiąc wiedzę z materiałów zamieszczonych w sieci. Zaczęło się od prostego <span>HTML</span> po <span>CSS</span> aż w końcu przenosiłam się na <span>JavaScript</span>.',
		'W okresie <span>2019-2021</span> tworzyłam proste projekty stron www. Z początku oparte na wyciąganiu danych przy wykorzystaniu <span>PHP</span>, w późniejszym etapie zaczęłam działać w <span>WordPressie</span>.',
		'<a href="https://ventus-trade-auta.netlify.app" target="_blank">Strona komisu</a> - przykładowy projekt sprzed lat służący prezentacji wystawianych pojazdów. Finalnie dane były wyciągane z panelu administracyjnego WordPressa. Aktualnie postanowiłam napisać w Expressie własny panel.',
		'<a href="https://robud.netlify.app" target="_blank">Strona firmowa</a> - przykładowa strona prezentująca zakres oraz zasięg usług prywatnej firmy budowlanej. Statyczna, postawiona w <span>GatsbyJs</span>.',
		'<a href="https://nervous-murdock-17fe79.netlify.app" target="_blank">Strona Foodtrucka</a> - przykładowa struktura strony, na którą spoglądam z sentymentem.',
		'Zawsze stawiałam na to, żeby większość skryptu wykonywać samodzielnie - zapewnia to większą elastyczność w zarządzaniu kodem.',
		'Kodowanie w <span>Reacie</span> rozpoczęłam w <span>2020</span> roku. Posidam kilka projektów zbudowanych w tym okresie w oparciu o <span>Context</span> i wyciąganie danych z baz <span>WordPressa</span> przy wykorzystaniu <span>GraphQl</span>',
		'W <span>2024</span> roku po ponad dwuletniej przerwie postanowiłam wrócić do programowania. Przedstawiony na tej stronie aktualny projekt ma za zadanie wskazanie podstawowych umiejętności, które posiadam. Większość starałam się pisać samodzielnie w oparciu o dokumentację. z <span>Contexu</span> przerzuciłam się na <span>Zustand</span>, który w moim uznaniu jest zdecydowanie bardziej elastyczny w zarządzaniu stanem aplikacji.',
	];
	const skills = [
		{
			name: 'HTML 5',
			color: '#dd2625',
			icon: <HTML5 />,
			span: 'Dlaczego oceniam na 80%?',
			desc: 'Tworzenie prostych struktur. Zarządzanie informacjami w headzie strony.',
			lvl: 80,
		},
		{
			name: 'CSS 3',
			color: '#8adacb',
			icon: <CSS3 />,
			span: 'Dlaczego oceniam na 70%?',
			desc: 'Inspiracja otwartymi projektami. Grid / flexbox / responsywność.',
			lvl: 70,
		},
		{
			name: 'JavaScript',
			color: '#DAE438',
			icon: <JavaScript />,
			span: 'Dlaczego oceniam na 70%?',
			desc: 'Kodowanie w oparciu o dokumentację. Tworzenie własnych funkcji.',
			lvl: 70,
		},
		{
			name: 'React JS',
			color: '#00d8ff',
			icon: <ReactJs />,
			span: 'Dlaczego oceniam na 70%?',
			desc: 'Budowa komponentów od podstaw. Kodowanie w oparciu o dokumentację i inne projekty.',
			lvl: 70,
		},
		{
			name: 'MongoDB',
			color: '#28ab3f',
			icon: <MongoDB />,
			span: 'Dlaczego oceniam na 40%?',
			desc: 'Integracja aplikacji z bazą danych. Zarządzanie danymi.',
			lvl: 40,
		},
		{
			name: 'GIT',
			color: '#ea5936',
			icon: <GIT />,
			span: 'Dlaczego oceniam na 40%?',
			desc: 'Korzystanie z protych funkcji: git push / pull / commit.',
			lvl: 40,
		},
		{
			name: 'Inkscape',
			color: '#686868',
			icon: <Inksacpe />,
			span: 'Dlaczego oceniam na 50%?',
			desc: 'Proste przygotowywanie ikon na stronę.',
			lvl: 50,
		},
		{
			name: 'GIMP2',
			color: '#d7a79c',
			icon: <Gimp />,
			span: 'Dlaczego oceniam na 50%?',
			desc: 'Proste przygotowywanie grafik na stronę.',
			lvl: 50,
		},
	];
	return (
		<>
			<ol ref={ref} style={{ '--length': '1' }} role='list' className='appDesc profile'>
				<li style={{ '--i': '0' }}>
					<h2>Umiejętności</h2>
					{aboutSkills.map((item) => {
						const markup = { __html: item };
						return (
							<p
								className='aboutDesc'
								key={uuidv4()}
								dangerouslySetInnerHTML={markup}
							></p>
						);
					})}
				</li>
			</ol>
			<div className='skills'>
				<ul>
					{skills
						.sort((a, b) => b.lvl - a.lvl)
						.map((item) => (
							<Skill key={uuidv4()} item={item} />
						))}
				</ul>
			</div>
		</>
	);
});

export default Skills;
