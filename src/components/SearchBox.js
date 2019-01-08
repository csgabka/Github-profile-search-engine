import React from 'react'

const SearchBox = ({username, getUserName}) => {
	return (
		<div>
			<h1><input type="text" onKeyUp={getUserName}></input></h1>
		</div>
		)
}

export default SearchBox;
