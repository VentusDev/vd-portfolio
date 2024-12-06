import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { VentusDev } from '../icons';

const Header = () => {
	return (
		<div className='appContentHeader'>
			<Link to='/'>
				<VentusDev />
			</Link>
		</div>
	);
};

export default Header;
