import React, { useState,useEffect } from 'react';
import requests from './requests';
import instance from './axios';
import "./banner.css"

 
function Banner() {
    
    const [movies,setMovies]= useState([]);
    useEffect(()=>{     
        async function fetchData(){
const request =await instance.get(requests.fetchNetflixOriginals);
  setMovies(
request.data.results[Math.floor(Math.random()*request.data.results.length-1)]    

  );
  
  return request;
}
        fetchData();
    },[]);

    function truncate(str,n){
        return str?.length >n ? str.substr(0,n-1)+ "...":str;
    }
    return (
        <header className="banner"
        style={{
        backagroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition:"center center"
        }}
        >
<div className="banner_contents">
    
<h1 className="banner_title">
   {movies?.title || movies?.name|| movies?.original_name} 
</h1>
<div className="banner_buttons">
<button className="banner_button">play</button>
<button className="banner_button">My List</button>
</div>
<h1 className="banner_description">{truncate(movies?.overview,150)}</h1>
</div>
<div className="banner--fadeBottom"></div>
</header >
    )
}

export default Banner

