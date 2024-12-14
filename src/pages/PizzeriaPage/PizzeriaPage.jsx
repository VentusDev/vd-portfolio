import React, { useLayoutEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './PizzeriaPage.scss';
import '../ProjectPages.scss'
import letsStartVideo from './screenshots/lets_start.mp4';
import signUpVideo from './screenshots/signup_example.mp4';
import signUpEmail from './screenshots/email_ver.png';
import soupOrder from './screenshots/order_soup.mp4';
import orderFetched from './screenshots/order_fatched.mp4';
import ordersFetched from './screenshots/orders_fatched.mp4';
import addressAdded from './screenshots/adress_added.mp4';

import adminPer from './screenshots/admin_per.mp4';
import itemsFilter from './screenshots/filter.mp4';
import itemsEdit from './screenshots/edit_start.mp4';
import itemsEditEnd from './screenshots/edited_end.mp4';
import changeSize from './screenshots/change_size.mp4';
import beforeChangeSize from './screenshots/waga.png';
import afterChangeSize from './screenshots/waga2.png';
import orderManagment from './screenshots/order_managment.mp4';
import orderManagmentOptions from './screenshots/change_status.png';
import setRabat from './screenshots/set_rabat.mp4';
import rabat from './screenshots/rabat.png';

import { handleClick } from '../../utils/functions.jsx';

const PizzeriaPage = () => {
	const projectDetails = [
		{
			title: '',
			stack: 'Frontend - Klient',
			details: [
				['vid', letsStartVideo],
				[
					'par',
					'Według założenia projektu osoby, które nie są zarejestrowane również mogą złożyć zamówienie. Wtedy kontakt jest prowadzony przez adres e-mail udostępniony w danych adresowych.',
				],
				['vid', signUpVideo],
				[
					'par',
					'Po założeniu konta na podany adres e-mail docelowo ma przyjść kod weryfikacyjny.',
				],
				['scr', signUpEmail, 'Ventus Dev - email weryfikacyjny'],
				['vid', soupOrder],
				[
					'par',
					'Do użytkowników, którzy nie są zarejestrowani wysyłany jest kod do śledzenia zamówienia.',
				],
				['vid', orderFetched],
				[
					'par',
					'Natomiast zarejestrowani użytkownicy posiadają dostęp do wszystkich swoich zamówień.',
				],
				['vid', ordersFetched],
				['par', 'I mogą elastyczne zmieniać dane adresowe.'],
				['vid', addressAdded],
			],
		},
		{
			title: '',
			stack: 'Frontend - Admin',
			details: [
				[
					'par',
					'Zarejestrowani użytkownicy mogą również otrzymać uprawnienia administratora',
				],
				['vid', adminPer],
				['par', 'Wtedy można już śmiało wziąć się za zarządzanie produktem.'],
				['vid', itemsFilter],
				[
					'par',
					'Przysługują opcje dodawania / usuwania oraz edytowania przedmiotów, które zostały umieszczone w panelu przez nas samych.',
				],
				['vid', itemsEdit],
				['vid', itemsEditEnd],
				[
					'par',
					'Istnieje opcja tworzenia elastycznych wariantów rozmiarów zamówienia wraz ze wskazaniem współczynnika, od którego ma być automatycznie liczona docelowa cena.',
				],
				['vid', changeSize],
				['scr', beforeChangeSize, 'Ventus Dev - produkt przed zmianą rozmiaru'],
				['scr', afterChangeSize, 'Ventus Dev - produkt po zmianie rozmiaru'],
				[
					'par',
					'Status zamówenia można zmienić bezpośrednio w panelu. Towarzyszy temu automatyczna wiadomość mailowa z komunikatem dotyczącym zmiany.',
				],
				['vid', orderManagment],
				[
					'scr',
					orderManagmentOptions,
					'Ventus Dev - wariatny statusu zamówienia',
				],
				[
					'par',
					'Oprócz zarządzania przedmiotem czy też statusem zamówienia, administrator ma prawo do przydzielania kodów rabatowych zarejestrowanym użytkownikom.',
				],
				['vid', setRabat],
				['scr', rabat, 'Ventus Dev - przykładowy rabat'],
				['par', 'Do projektu z czasem będą dodawane kolejne funkcje.'],
			],
		},
		{
			stack: 'Podsumowanie',
			info: 'Projekt ma na celu udowodnienie podstawowych umiejętności, do których należą:',
			details: [
				['par', 'ustawienie bazdy danych (<span>MongoDB</span>).'],
				[
					'par',
					'tworzenie endpointów API (<span>UserModel, OrderModel i inne</span>).',
				],
				[
					'par',
					'wdrażanie autoryzacji użytkownika (<span>rejestracja, logowanie, aktualizacja hasła</span>).',
				],
				[
					'par',
					'wprowadzenie automatycznej wymiany informacji drogą mailową (<span>Nodemailer</span>).',
				],
				[
					'par',
					'kreowanie komponentów wielokrotnego użytku (<span>Inputy, Buttony, Layout</span>).',
				],
				[
					'par',
					'zarządzanie stanem aplikacji (<span>Zustand - wykorzystanie LocalStorage dla pamięci koszyka</span>)',
				],
				[
					'par',
					'elastyczne zarządzanie produktem (<span>tworzenie, edycja, usuwanie przedmiotów / kategorii / rozmiarów</span>)',
				],
				[
					'par',
					'bezpośredni wpływ na rolę uzytkownika przy wykorzystaniu aplikacji (<span>uprawnienia administratora / rabaty</span>)',
				],
			],
		},
	];

	const aboutProject = [
		'Poniżej można przejrzeć testowanie niektóych z funkcji zamieszczonych w projekcie. Aktualnie jest on w fazie testowej, mam zamiar go dalej rozwijać.',
		'Osobom zainteresowanym chętnie podam odnośnik z dostępem do witryny i panelu administracyjnego.',
		'Najlepiej skontaktować się przez messengera: <a href="https://www.messenger.com/t/100005590841375" target="_blank">xfeliksox</a>  lub mailowo: <a href="mailto:aleksandrasniegucka@wp.pl">aleksandrasniegucka@wp.pl</a>',
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
			<div className='projectHeader pizzeriaHeader'>
				<h2>Projekt Pizzeria</h2>
				{aboutProject.map((item) => {
					const markup = { __html: item };
					return <p key={uuidv4()} dangerouslySetInnerHTML={markup}></p>;
				})}
				<h6>spis treści</h6>
				{projectDetails.map((item, i) => (
					<p
						key={uuidv4()}
						onClick={() => handleClick(i, elementsRef, projectDetails.length)}
					>
					<ul>
					<li><span className='spanItem'>{item.stack}</span></li>
					</ul>

					</p>
				))}
			</div>

			{projectDetails.map((item, i) => (
				<li style={{ '--i': i }} key={uuidv4()}>
					<h3 ref={(el) => (elementsRef.current[i] = el)}>{item.title}</h3>
					<h4
						onClick={() =>
							handleClick(i, elementsRef, projectDetails.length, true)
						}
					>
						{item.stack}
					</h4>
					<span>{item.info}</span>
					<ol style={{ '--length': item.details.length }} role='list'>
						{item.details.map((i, x) => {
							if (i[0] === 'vid') {
								return (
									<li style={{ '--i': x + 1 }} key={uuidv4()}>
										<video controls muted className='videoInput'>
											<source src={i[1]} />
										</video>
									</li>
								);
							}
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

export default PizzeriaPage;
