import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input type="search" placeholder="search robots" className="pa3 ba b--blue bg-lightest-blue br4" onChange={searchChange} />
		</div>
	);
}

export default SearchBox;