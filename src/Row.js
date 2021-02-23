import axios from './axios';
import React,{useState,useEffect} from 'react';
import requests from './Request';
import './Row.css';
function Row(props){
    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchingData(){
            const req=await axios.get(props.fetchedUrl);
            setMovies(req.data.results);
            return requests;
        }
        fetchingData();
    },[props.fetchedUrl]);
    const baseUrl="https://image.tmdb.org/t/p/original/";
    return <div className="row">
        <h2>{props.title}</h2>
            <div className="row_images">
            {
                movies.map((movie)=>
                    ((props.isLarge && movie.poster_path)|| 
                    (!props.isLarge && movie.backdrop_path))&&(
                    <img  className={`row_image ${props.isLarge && "row_largeimage"}`}
                     key={movie.id} src={`${baseUrl}${props.isLarge?movie.poster_path:movie.backdrop_path}`}
                      alt={movies.name} />
                ))
            }
            </div>
    </div>
}
export default Row;
