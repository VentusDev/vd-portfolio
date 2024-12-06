import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skill from '../Skill/Skill';
import { Link } from 'react-router-dom';
import ExamplePdf from './CV_Aleksandra_Śniegucka_2024-2025.pdf';
import { moreAbout, socials, cv } from '../variables.jsx';

const MoreAbout = () => {

	return (
<>
			<ol style={{ '--length': '1' }} role='list' className='appDesc profile'>
				<li style={{ '--i': '0' }}>
					<h5 className='secondProfile'>Krótko o mnie</h5>
					{moreAbout.map((item) => {
						const markup = { __html: item };
						return <p className='aboutDesc' key={uuidv4()} dangerouslySetInnerHTML={markup}></p>;
					})}
				</li>
			</ol>
			<div className='skills'>
			<ul>
				<Link
					to={ExamplePdf}
					download='CV_Aleksandra_Śniegucka_2024-2025'
					target='_blank'
					rel='noreferrer'
				>
					<Skill item={cv} />
				</Link>
				{socials
					.sort((a, b) => b.lvl - a.lvl)
					.map((item) => (
						<a key={uuidv4()} href={item.a} target='_blank'>
							<Skill item={item} />
						</a>
					))}
			</ul>
			</div>

</>
	);
};

export default MoreAbout;
