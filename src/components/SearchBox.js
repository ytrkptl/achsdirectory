import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return (
			<input 
				id="searchBox"
				className='searchBox'
				type='search' 
				placeholder='Search Employees'
				onChange={searchChange}
			/>
	);
}

export default SearchBox;