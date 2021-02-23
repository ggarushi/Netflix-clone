import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import request from './Request';
import requests from './Request';
import Row from './Row';
function Home(){
    return <div>
        {/*Navbar*/}
        <Navbar/>
        <Banner/> 
        <Row title="NETFLIX ORIGINALS" fetchedUrl={requests.fetchNetflixOriginals} isLarge/> 
        <Row title="TOP TRENDING" fetchedUrl={requests.fetchTrending} /> 
        <Row title="TOP RATED" fetchedUrl={requests.fetchTopRated} /> 
        <Row title="ACTION MOVIES" fetchedUrl={requests.fetchActionMovies} />
        <Row title="HORROR MOVIES" fetchedUrl={requests.fetchHorrorMovies} />  
        <Row title="COMEDY MOVIES" fetchedUrl={requests.fetchComedyMovies} /> 
        <Row title="ROMANTIC MOVIES" fetchedUrl={requests.fetchRomanceMovies} /> 
        <Row title="DOCUMENTARIES" fetchedUrl={requests.fetchDocumentaries} /> 
            
    </div>
}
export default Home;