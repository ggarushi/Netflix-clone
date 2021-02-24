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
            </div>
}
export default Login;