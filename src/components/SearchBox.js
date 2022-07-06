import React, { useState } from "react";

const SearchBox = (props) => {
const[searchvalue,setSearchValue]=useState("");

const handleSearchInputChanges=((e)=>{
  setSearchValue(e.target.value);
  
})

const CallSearchFunction=((e)=>{
	props.SearchBox(searchvalue);
  })

  return (
    <form class="d-flex" role="search">
      <input
        value={searchvalue}
		onChange={handleSearchInputChanges}
		type="text"
        placeholder="Movie Name"
        aria-label="Search"
      />
      <input onClick={CallSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default SearchBox;
