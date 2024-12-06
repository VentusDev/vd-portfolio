import React, { useRef, useState } from 'react';
import './AppDesc.scss';
import { v4 as uuidv4 } from 'uuid';
import { projectDetails } from '../variables.jsx';
import { Link } from 'react-router-dom';

import { handleClick } from '../../utils/functions.jsx'

const AppDesc = () => {
	const elementsRef = useRef([]);

	return (
		<ol
			style={{ '--length': projectDetails.length - 1  }}
			role='list'
			className='appDesc'
		>
			<li>
				<h2>krótko o projekcie Pizzeria</h2>
			</li>
			{projectDetails.map((item, i) => (
				<li style={{ '--i': i }} key={uuidv4()}>
					<h3 ref={(el) => (elementsRef.current[i] = el)}>{item.title}</h3>
					<h4 onClick={() => handleClick(i,elementsRef, projectDetails.length, true)}>{item.stack}</h4>
					<ol style={{ '--length': item.details.length }} role='list'>
						{item.details.map((i, x) => (
							<li style={{ '--i': x + 1 }} key={uuidv4()}>
								<span>{i}</span>
							</li>
						))}
					</ol>
					<Link to='/pizzeria'>dowiedz się więcej</Link>
				</li>
			))}
			
		</ol>
	);
};

export default AppDesc;
