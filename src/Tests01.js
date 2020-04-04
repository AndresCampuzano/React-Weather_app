import React from 'react';

const Tests01 = props => {
	return (
		<div>
			{props.propTest.map((item, num) => {
				return (
					<div key={num}>
						<p>{item.temp}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Tests01;
