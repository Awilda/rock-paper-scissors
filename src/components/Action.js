import React from 'react';

const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.randomChoice}
				>
					Shoot!
			</button>
		</div>
	);
};

export default Action;