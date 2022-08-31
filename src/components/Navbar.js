import React from 'react';
import '../index.css'
import Udemy_logo from "../images/Udemy_logo.png";
import toggle from "../images/toggle.png";
import Lang from "../images/lang.png";

function Navbar() {
  return (
    <>
        <nav className='nav-container' >
       
        <div className = "toggle"> <img  src = { toggle }  /></div>
            
            <div className="icon"> <img  src={ Udemy_logo }/></div>   
            <div><a className="nav-text">Categories</a></div>
            
            
            <div className="searchbar"  > 

                <form onsubmit="return doForm()" className='fill' >
                    <input   className='input1' type="text" title="Search" placeholder="Search for anything" id="search" />
                    {/* <input type="submit" className='input2' /> */}
                </form>
                
            </div>
            
            <div><a className="nav-text">Udemy Business</a></div>
            <div><a className="nav-text">Teach on Udemy</a></div>

            <div> <button className = "shopicon"/></div>
            
             <button className='login-button' > Login </button>
             <button className='signup-button' > Sign up </button>
            
            <div className = "language"> <img  src = { Lang } /></div> 
        </nav>
    </>
  );
}

export default Navbar;