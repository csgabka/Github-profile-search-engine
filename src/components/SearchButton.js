import React from 'react'

const SearchButton = ({searchProfile}) => {

		return (
		<div>
			<button name="searchButton" 
			className="btn btn-outline-info" 
			onClick={searchProfile}
			>Search</button>
		</div>
		);
}

export default SearchButton;
