import React,{useState,useEffect} from 'react';
import './Navbar.css';
function Navbar(){
const[visible,handlevisible]=useState(false);
// used to change make navbar of black color when screen is scrolled
const transistnavbar=()=>{
    if(window.scrollY>100)
    handlevisible(true);
    else
    handlevisible(false);
}
useEffect(()=>{
    window.addEventListener("scroll",transistnavbar);
    return ()=>window.removeEventListener("scroll",transistnavbar);
},[]);
    return <div className={`nav ${visible && "navbar"}`}>
        <div className="nav_content">
            <img 
            className="net_logo" src="https://cdn.arstechnica.net/wp-content/uploads/2018/08/Netflix_Logo_Digital_Video-800x450.jpg" 
            alt=""/>
            <img className="nav_avtar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""/>
        </div>
    </div>
}
export default Navbar;