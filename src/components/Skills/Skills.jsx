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
	SCSS,
} from './icons';
import Skill from '../Skill/Skill';
import { TailwindCSS, TS } from '../icons';

const Skills = forwardRef((props, ref) => {
	const aboutSkills = [
		'Przygodę z programowniem rozpoczęłam pod koniec <span>2019</span> roku, czerpiąc wiedzę z materiałów zamieszczonych w sieci. Zaczęło się od prostego <span>HTML</span> po <span>CSS</span> aż w końcu przenosiłam się na <span>JavaScript</span>.',
		'W okresie <span>2019-2021</span> tworzyłam proste projekty stron www. Z początku oparte na wyciąganiu danych przy wykorzystaniu <span>PHP</span>, w późniejszym etapie zaczęłam działać w <span>WordPressie</span>.',

		'Kodowanie w <span>Reacie</span> rozpoczęłam w <span>2020</span> roku. Posidam kilka projektów zbudowanych w tym okresie w oparciu o <span>Context</span> i wyciąganie danych z baz <span>WordPressa</span> przy wykorzystaniu <span>GraphQl</span>',
		'W <span>2024</span> roku po ponad dwuletniej przerwie postanowiłam wrócić do programowania. Przedstawiony na tej stronie aktualny projekt ma za zadanie wskazanie podstawowych umiejętności, które posiadam. Większość starałam się pisać samodzielnie w oparciu o dokumentację. z <span>Contexu</span> przerzuciłam się na <span>Zustand</span>, który w moim uznaniu jest zdecydowanie bardziej elastyczny w zarządzaniu stanem aplikacji.',
	];
	const skills = [
		{
			name: 'HTML 5',
			color: '#dd2625',
			icon: <HTML5 />,
			desc: 'Tworzenie prostych struktur. Zarządzanie informacjami w headzie strony.',
			lvl: 80,
		},
		{
			name: 'CSS 3',
			color: '#8adacb',
			icon: <CSS3 />,
			desc: 'Inspiracja otwartymi projektami. Grid / flexbox / responsywność.',
			lvl: 70,
		},
		{
			name: 'JavaScript',
			color: '#DAE438',
			icon: <JavaScript />,
			desc: 'Kodowanie w oparciu o dokumentację. Tworzenie własnych funkcji.',
			lvl: 70,
		},
		{
			name: 'React JS',
			color: '#00d8ff',
			icon: <ReactJs />,
			desc: 'Budowa komponentów od podstaw. Kodowanie w oparciu o dokumentację i inne projekty.',
			lvl: 70,
		},
		{
			name: 'MongoDB',
			color: '#28ab3f',
			icon: <MongoDB />,
			desc: 'Integracja aplikacji z bazą danych. Zarządzanie danymi.',
			lvl: 40,
		},
		{
			name: 'GIT',
			color: '#ea5936',
			icon: <GIT />,
			desc: 'Korzystanie z protych funkcji: git push / pull / commit.',
			lvl: 40,
		},
		{
			name: 'SCSS',
			color: '#d961e7',
			icon: <SCSS />,
			desc: 'Korzystanie z protych funkcji do łatwiejszego pisania CSS',
			lvl: 40,
		},
		{
			name: 'Inkscape',
			color: '#686868',
			icon: <Inksacpe />,
			desc: 'Proste przygotowywanie ikon na stronę.',
			lvl: 50,
		},
		{
			name: 'GIMP2',
			color: '#d7a79c',
			icon: <Gimp />,
			desc: 'Proste przygotowywanie grafik na stronę.',
			lvl: 50,
		},
		{
			name: 'TailwindCSS',
			color: '#8adedf',
			icon: <TailwindCSS />,
			desc: 'Dopiero od końcówki 2024 zapoznaję się z frameworkiem.',
			lvl: 30,
		},
		{
			name: 'TypeScript',
			color: '#2161c0',
			icon: <TS />,
			desc: 'Dopiero od końcówki 2024 zapoznaję się z językiem.',
			lvl: 30,
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
