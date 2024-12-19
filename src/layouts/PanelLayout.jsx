import { Outlet } from 'react-router-dom';

import React from 'react';

import Header from '@/components/Header/Header';
import NavSidebar from '@/components/NavSidebar/NavSidebar';
import Footer from '../components/Footer/Footer';

const PanelLayout = () => {
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
