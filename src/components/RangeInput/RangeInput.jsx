import React from 'react';
import './RangeInput.scss';

const RangeInput = ({ offset = 80 }) => {
	return (
		<div className='rangeWrap'>
			<input type='range' className='range' min='0' max='100' defaultValue='50' />
			<output className='bubble' style={{ left: `calc(${offset}% - 14px)` }}>
				{offset}
			</output>
		</div>
	);
};

export default RangeInput;
