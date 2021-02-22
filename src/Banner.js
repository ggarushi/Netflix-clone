import React,{useState,useEffect} from 'react';
import './Banner.css';
function Banner(){
    return (<header className="banner" style={{backgroundImage: `https://www.acemetrix.com/wp-content/themes/acemetrix/images/video/acemetrix_banner_video.jpg`}}>
            <div className="banner_content">
                 <h1 className="banner_title">moviename</h1>
                 <div className="banner_buttons">
                     <button className="buttons">Play</button>
                     <button className="buttons">My List</button>
                 </div>
                 <h2 className="movie_description">movie description</h2>
                 <div className="banner_bottom"></div>
             </div>
     </header>)
}
export default Banner;