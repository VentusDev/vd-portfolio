import React from 'react';
import RangeInput from '../RangeInput/RangeInput';
import { v4 as uuidv4 } from 'uuid';
import './Skill.scss';

const Skill = ({ item }) => {
	const { color, lvl, icon, name, span, desc } = item;
	return (
		<li style={{ '--accentColor': color }} key={uuidv4()}>
			{lvl && <RangeInput offset={lvl} />}
			{icon && <div className='icon'>{icon}</div>}
			{name && <div className='title'>{name}</div>}

			{lvl && <span>{`Dlaczego oceniam na ${lvl}%?`}</span>}
			{desc && (
				<div className='descr'>
					<p>{desc}</p>
				</div>
			)}
		</li>
	);
};

export default Skill;
