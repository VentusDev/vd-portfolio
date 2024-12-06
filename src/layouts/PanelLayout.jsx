import { Outlet } from 'react-router-dom';

import React from 'react';

import Header from '@/components/Header/Header';
import NavSidebar from '@/components/NavSidebar/NavSidebar';

const PanelLayout = () => {
	const delayComponents = {
		nav: 1000,
		footer: 2000,
	};
	return (
		<div id='panelLayout'>
			<NavSidebar />

			<section className='dashboard'>
				<Header />

				<Outlet />
			</section>
		</div>
	);
};

export default PanelLayout;
