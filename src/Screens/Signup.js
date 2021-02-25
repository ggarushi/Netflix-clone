import React from 'react';
import {Link} from "react-router-dom";
import Home from './Home';
import './Signup.css';
function Signup(){
    return(<div className="signup">
                <form className="signup_form">
                    <h1 style={{textAlign:"left",marginBottom:"20px"}}>Sign In</h1>
                    <input className="signup_input" placeholder="Email" type="Email"/>
                    <input className="signup_input" placeholder="Password" type="password"/>
                    <button className="signup_button" type="submit" ><Link to="Home" style={{textDecoration:'none',color:'white'}}>Sign In</Link></button>
                    <h4 className="signup_bottom">New to Netflix? Sign Up now.</h4>
                </form>

            </div>
            )

}
export default Signup;