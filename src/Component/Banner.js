import React,{useState,useEffect} from 'react';
import axios from '../axios';
import requests from "../Request";
import './Banner.css';
function Banner(){
    const[movie,setmovie]=useState([]);
    useEffect(()=>{
        async function fetching(){
            const req=await axios.get(requests.fetchNetflixOriginals);
            setmovie(
                req.data.results[
                    Math.floor(Math.random()*req.data.results.length-1)
                ]
            );
            
            return req;
        }
        fetching();
    },[]);
   function shortlength(name,len){
       if(name?.length>len)
       return name.substr(0,len-1)+"...";
       else
       return name;

   }
    return (<header className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center"}}>
            <div className="banner_content">
                 <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                 <div className="banner_buttons">
                     <button className="buttons">Play</button>
                     <button className="buttons">My List</button>
                 </div>
                 <h3 className="movie_description">{shortlength(movie?.overview,160)}</h3>
             </div>
             <div className="banner_bottom"></div> 
     </header>)
}
export default Banner;