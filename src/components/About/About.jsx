import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { about } from '../variables.jsx';
import './About.scss'

const About = () => {
	return (
		<ol style={{ '--length': '1' }} role='list' className='appDesc profile'>
			<li style={{ '--i': '1' }}>
				<div className='flexBox'>
				<h3>dzień dobry. ;)</h3>
				<h5></h5>
				</div>
				{about.map((item) => {
					const markup = { __html: item };
					return <p className='aboutDesc' key={uuidv4()} dangerouslySetInnerHTML={markup}></p>;
				})}
			</li>
		</ol>
	);
};

export default About;
