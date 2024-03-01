import React, { useEffect, useState } from "react";
 import "./css_component/card.css";
 import { FiSearch } from "react-icons/fi";


const Appp=()=>{
    const[name,setName]=useState("null ")
    const[set,setinput]=useState("mumbai");


    useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${set}&units=metric&appid=556f7527eb35724ea29b373bc60e2ead`

    async function weatherData(){
   const res=await fetch(url);
   const data= await res.json();
   console.log(data.main)
   setName(data.main)
    }
    weatherData();
  },[set])

  return(
    <>
    <div className="container">
      <div className="maincard">
        <div className="textcard">
        <FiSearch style={{position:"relative",left:"35px" ,top:"5px",fontSize:"1.3rem" ,color:"gray"}}/>

          <input type="search"  placeholder=" eg. Kanpur" className="inpute" 
            onChange={(element)=>{
                setinput(element.target.value)  
            }}
          />
        </div>
        <div className="cityname">
          <h1>{set}</h1>
          <h2 className="temp">
          {name? name.temp:""}
          </h2>
          <h3>{name?name.temp_min:""} °C || {name? name.temp_max:""}  °C</h3>
        </div>
      </div>
      </div>
    </>
  )
}
export default Appp;