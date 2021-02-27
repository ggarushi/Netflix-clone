import axios from './axios';
import React,{useState,useEffect} from 'react';
import requests from './Request';
import './Row.css';
import Youtube from 'react-youtube'; 

const baseUrl="https://image.tmdb.org/t/p/original";
function Row(props){
    const[movies,setMovies]=useState([]);
    const[trailer,setTrailer]=useState("");
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
    useEffect(()=>{
        async function fetchingData(){
            const req=await axios.get(props.fetchedUrl);
            setMovies(req.data.results);
            return requests;
        }
        fetchingData();
    },[props.fetchedUrl]);
    
    const handleClick=async(movie)=>{
        if(trailer)
        setTrailer("");
        else
        {
            try
          {  let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=82952e258de233099599b55eba264375`
          );
          setTrailer(trailerurl.data.results[0]?.key);}
          catch(error){
              console.log(error);
          }
        }
    }
    return <div className="row">
        <h2>{props.title}</h2>
            <div className="row_images">
            {
                movies.map((movie)=>
                    ((props.isLarge && movie.poster_path)|| 
                    (!props.isLarge && movie.backdrop_path))&&(
                    <img  className={`row_image ${props.isLarge && "row_largeimage"}`}
                     key={movie.id} 
                     onClick={()=>handleClick(movie)}
                     src={`${baseUrl}${props.isLarge?movie.poster_path:movie.backdrop_path}`}
                      alt={movies.name} />
                ))
            }
            </div>
            {trailer && <Youtube videoId={trailer} opts={opts}></Youtube>}
    </div>
}
export default Row;
