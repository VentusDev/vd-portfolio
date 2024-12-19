import React from 'react';
import { CV, GitHub, Instagram } from './icons';

const about = [
	'Nazywam się <span>Aleksandra Śniegucka</span> i miło mi, że właśnie odwiedzasz stronę z moim portfolio.',
	'Projekt <span>Pizzeria</span> powstał po dłuższej przerwie w programowaniu, do którego chcę powrócić także w kontekście zawodowym. Ma na celu uzupełnienie CV oraz udowodnienie umiejętności nabytych samodzielnie poprzez wgląd do dokumentacji i innych otwartych projektów.',
	'Osobiście uważam, że lepiej radzę sobie na backendzie, w przypadku frontendu (ze względu na specyficzny gust) inspiruję się innymi projektami udostępnionymi w sieci.',
	'Zawsze stawiałam na to, żeby większość skryptu wykonywać samodzielnie - zapewnia to większą elastyczność w zarządzaniu kodem.',
	'Działam w Reacie (<span>MERN Stack</span>), starając się tworzyć własne skrypty bez zbędnego wykorzystywania zewnętrznych paczek, które mogą negatywnie wpływać na optymalizację renderowanego kodu.',
	'Moim celem jest tworzenie większości komponentów i funkcji od podstaw, co wpływa na własny rozwój oraz umożliwia elastyczne zarządzanie kodem.',
];

const projectDetails = [
	{
		title: 'Backend',
		stack: 'MongoDB + Express.js + Nodemailer',
		details: [
			'zakładanie konta',
			'mailowa weryfikacja użytkownika',
			'prosta walidacja formularza',
			'resetowanie hasła',
		],
	},
	{
		title: 'Frontend - Klient',
		stack: 'React.js + Zustand',
		details: [
			'złożenie zamówienia będąc zalogowanym lub bez zakładania konta',
			'dodawanie produktu do koszyka',
			'personalizacja zamówienia',
			'prosta walidacja formularza',
			'dodawanie / aktualizacja adresu dostawy',
			'śledzenie statusu zamówienia',
			'kod weryfikacyjny do śledzenia statusu dla użytkowników bez założonego konta',
			'aktualizacja koszyka po zalogowaniu',
			'dostęp do wszystkich zamówień dla zalogowanych użytkowników',
		],
	},
	{
		title: 'Frontend - Administrator',
		stack: 'React.js + Zustand',
		details: [
			'wysłanie prośby o przyznanie uprawień admnistratora dla zarejestrowanych użytkowników',
			'dodawanie / aktualizacja kategorii',
			'dodawanie / aktualizacja przedmiotów',
			'dodawanie / aktualizacja rozmiaru przedmiotu',
			'dodawanie / aktualizacja adresu dostawy',
			'dodawanie kodu rabatowego dla wszystkich lub wybranego użytkownika',
			'dodawanie / odbieranie uprawnień administratora',
			'aktualizacja statusu zamówienia',
		],
	},
];

const moreAbout = [
	'Pod względem towarzyskim mam osobowość Outsidera, co wcale nie oznacza, że nie potrafię pracować w zespole. Pięć lat studiów w pracy głównie w grupie mogą to udowodnić',
	'Przykładam się do zleconych zadań. Zwracam uwagę na szczegóły i lubię gdy wszystko jest wykonane od A do Z.',
	'Nie zostawiam rzeczy "na póżniej". Wydzielam sobie priorytety i cele, do których dążę.',
	'Poświęcam sporo czasu na naukę i rozwój po czym stawiam na aktywny odpoczynek. Lubię być w ruchu - nawet pracuję przy komputerze w pozycji stojącej.',
	'Liczę na rozwój w kierunku programistycznym, ponieważ kodowanie sprawia mi radość i przynosi dużą satysfakcję. Lubię rozwiązywać różne problemy. Uczę się na własnych błędach.',
];
const socials = [
	{
		name: 'GitHub',
		color: '#5e5e5e',
		icon: <GitHub />,
		a: 'https://github.com/VentusDev',
		span: 'VentusDev',
	},
	{
		name: 'Instagram',
		color: '#ef5fd7',
		icon: <Instagram />,
		a: 'https://www.instagram.com/xfeliksox',
		span: 'xfeliksox',
	},
];

const cv = {
	name: 'CV',
	color: '#ff9900',
	icon: <CV />,
	span: 'wystarczy kliknąć ;)',
};

export { about, projectDetails, moreAbout, socials, cv };
