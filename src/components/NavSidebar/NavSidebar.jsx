import React, { useEffect, useState } from 'react';
import './NavSidebar.scss';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import { useDashStore } from '@/store/dashStore';
import { v4 as uuidv4 } from 'uuid';
import Toggler from '@/components/Toggler/Toggler';
import { VDlogo } from '../icons';
import { Link } from 'react-router-dom';

const NavSidebar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	let close = openMenu ? 'close' : '';

	const { setMode, modeState } = useDashStore();

	const handleToggleMode = () => {
		document.documentElement.classList.toggle('vdPanelLight');
		document.documentElement.classList.toggle('vdPanel');
		setMode();
	};

	useEffect(() => {
		if (modeState) {
			document.documentElement.classList.add('vdPanelLight');
			document.documentElement.classList.remove('vdPanelremove');
		} else {
			document.documentElement.classList.add('vdPanel');
			document.documentElement.classList.remove('vdPanelLight');
		}
	}, []);

	const pagesLinks = [
		['komis', 'https://ventus-trade-auta.netlify.app', <VDlogo />],
		['firma budwolana', 'https://robud.netlify.app', <VDlogo />],
		['foodtruck', 'https://nervous-murdock-17fe79.netlify.app', <VDlogo />],
	];

	const project = [['pizzeria', '/pizzeria', <VDlogo />]];

	return (
		<nav className={`${close}`}>
			<div className='navHeader'>
				<BurgerMenu
					variant={'arrow1'}
					setOpenMenu={setOpenMenu}
					openMenu={openMenu}
					customClass='burger'
				/>
			</div>
			<div className='menuItems'>
				<ul className='navLinks'>
					<li key={uuidv4()}>
						<a className='pagesLinks'>
							<span className='linkName'>projekty z 2021</span>
						</a>
					</li>
					{pagesLinks.map((item) => (
						<li key={uuidv4()}>
							{' '}
							<a
								href={item[1]}
								target='_blank'
								className='pagesLinks'
								key={uuidv4()}
							>
								{item[2]}
								<span key={uuidv4()} className='linkName'>
									{item[0]}
								</span>
							</a>{' '}
						</li>
					))}
					<li>
						<a className='pagesLinks'>
							<span className='linkName'>projekty z 2024</span>
						</a>
					</li>
					{project.map((item) => (
						<li key={uuidv4()}>
							{' '}
							<Link to={item[1]} className='pagesLinks' key={uuidv4()}>
								{item[2]}
								<span className='linkName'>{item[0]}</span>
							</Link>{' '}
						</li>
					))}
				</ul>

				<ul className='logoutMode'>
					<li className='mode'>
						<a title='zmień motyw' onClick={handleToggleMode}>
							<span className='linkName'>motyw</span>
						</a>

						<Toggler
							onClick={handleToggleMode}
							title='zmień motyw'
							state={modeState}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavSidebar;
