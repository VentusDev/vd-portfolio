import { Outlet, useLocation } from 'react-router-dom';

import React, { useEffect } from 'react';

import Header from '@/components/Header/Header';
import NavSidebar from '@/components/NavSidebar/NavSidebar';
import Footer from '@/components/Footer/Footer';

const PanelLayout = () => {
	const location = useLocation();
	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}, [location]);
	return (
		<>
			<div id='panelLayout'>
				<NavSidebar />

				<section className='dashboard'>
					<Header />
					<Outlet />
					<Footer />
				</section>
			</div>
		</>
	);
};

export default PanelLayout;
