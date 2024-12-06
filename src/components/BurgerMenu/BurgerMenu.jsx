import React, { useState } from 'react';

import './BurgerMenu.css';

const BurgerMenu = ({ variant, setOpenMenu, openMenu, customClass = '' }) => {
	let activeClass = openMenu ? `activeMenu ${customClass}` : customClass;
	return (
		<>
			{variant == 'arrow1' && (
				<svg
					className={`ham ham2 ${activeClass}`}
					viewBox='0 0 100 100'
					width='80'
					onClick={() => setOpenMenu(!openMenu)}
				>
					<path
						className='line top'
						d='m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381'
					/>
					<path className='line middle' d='m 30,50 h 40' />
					<path
						className='line bottom'
						d='m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381'
					/>
				</svg>
			)}
		</>
	);
};

export default BurgerMenu;
