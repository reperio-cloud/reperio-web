import React from 'react';

const Searchbar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Enter in your ingredients (ex: Eggs, Milk, Flour)"}
    />
  );
}

export default Searchbar