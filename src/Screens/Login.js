import React,{useState} from 'react';
import './Login.css';
import Signup from './Signup';
import {Link} from "react-router-dom";
function Login(){
    const[signIn,setSignin]=useState(false);
    return <div className="login">
                <div className="login_content">
                    <img 
                    className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
                    alt="Netflix Logo"/>
                <div className="login_gradient"></div>
                {/* <button className="login_button"  onClick={()=>setSignin(true)}>Sign In</button> */}
                </div>
                <div className="login_card">
                    {signIn?(<Signup/>):(
                        <>
                            <h1 className="login_title">Unlimited movies, TV shows and more.</h1>
                            <h2 className="subtitle">Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your 
                                email to create or restart your membership.</h3>
                            <button className="login_started"><Link to="Home" style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
                            <button className="login_button"  onClick={()=>setSignin(true)}>Sign In</button>
                        </>
                    )}
                    
                    
                </div>
            </div>
}
export default Login;
// "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-halloween-movies-for-netflix-1604009108.jpg"

