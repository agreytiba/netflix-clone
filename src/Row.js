import React, {useState,useEffect}from 'react';
import instance from './axios';
import "./Rows.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_Url ="https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl,isLargeRow}) {
    const [movies,setmovies]= useState([]); 
    const [TrailerUrl,setTrailerUrl]= useState("");

    useEffect(() => {
        async function fetchData() {
            const request =await instance.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
  
    //for the youtube pop pup play,width,height
   const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
     // condition on click to show the movieTrailer and exit the movieTrailer
    const handleClick=(movie)=>{
        if(TrailerUrl){
            setTrailerUrl("");
        }
    
    else {
        movieTrailer(movie?.name || "")
        .then((url)=>{
const urlParams = new URLSearchParams(new URL(url).search)
    setTrailerUrl (urlParams.get('v')) ; 
     console.log(TrailerUrl);
}) 
        .catch((error) => console.log(error))

    }}; 
    return (
        <div className="row">
            <h2>{title}</h2>
             <div className="row_posters">
{movies.map(movie => <img 
key={movie.id}
onClick ={() =>handleClick(movie)}
 className={`row_poster ${isLargeRow && "row_posterLarge"}`}
src={`${base_Url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
alt={movie.name}/>)}
             </div>
    
         { TrailerUrl &&  <YouTube videoId={TrailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row;
