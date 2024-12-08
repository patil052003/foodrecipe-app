import React, { useState, useRef } from 'react';
import Meal from './Meal';

const MainPage = () => {
  const myRef = useRef(null);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const[msg,setMsg]=useState();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myfun = async () => {
    if(search===""){
      setMsg("Please Enter Dish")
    }
    else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        console.log(jsonData.meals);
        setData(jsonData.meals);
        setMsg("")
    }
  };
  
  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
    <div className="container" ref={myRef}>
      <div className="searchbar">
        <input type="text" placeholder="Enter Dish" onChange={handleInput} />
        <button onClick={myfun}>Search</button>
      </div>
      <h3 className='msg' >{msg}</h3>
      <div>
        <Meal detail={data} />
      </div>
    </div>
    </>
  );
};

export default MainPage;
