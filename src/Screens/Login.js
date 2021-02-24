import React from 'react';
import './Login.css';
function Login(){
    return <div className="login">
                <div className="login_content">
                    <img 
                    className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
                    alt="Netflix Logo"/>
                    <button className="login_button">Sign In</button>
                <div className="login_gradient"></div>
                </div>
                <div className="login_card">
                    
                    <h1 className="login_title">Unlimited movies, TV shows and more.</h1>
                    <h2 className="subtitle">Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your 
                        email to create or restart your membership.</h3>
                    <button className="login_started">Get Started</button>
                    
                </div>
            </div>
}
export default Login;
// "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-halloween-movies-for-netflix-1604009108.jpg"
