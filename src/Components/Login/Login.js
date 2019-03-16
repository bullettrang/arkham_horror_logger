import React from 'react';
import './Login.css';
export const Login =(props)=>{
    return(
        <div className="Login__main">
            <div className="Login__main--textBox">
                <h1 id="Login__main--textBox--heading">ARKHAM HORROR LOGGER</h1>
                <h2 id="Login__main--textBox--subheading">Please Log In</h2>
            </div>
            <div className="Login__main--content">
                <label htmlFor="Login__main--userName">UserName</label>
                <input id="Login__main--userName"type="email"></input>
                <label htmlFor="Login__main--userPassword">Password</label>
                <input id="Login__main--userPassword"type="password"></input>
            </div>
        </div>
    )
}