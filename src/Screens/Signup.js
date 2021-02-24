import React from 'react';
import './Signup.css';
function Signup(){
    return(<div className="signup">
                <form className="signup_form">
                    <h1>Sign In</h1>
                    <input className="signup_input" placeholder="Email" type="Email"/>
                    <input className="signup_input" placeholder="Password" type="password"/>
                    <button className="signup_button" type="submit">Sign In</button>
                </form>

            </div>
            )

}
export default Signup;