import React from 'react';
import '../../index.css';

import Udemy_logo from "../../images/Udemy_logo.png";
import toggle from "../../images/toggle.png";
import Lang from "../../images/lang.png";
import SearchIcon from "../../images/searchicon.jpg";

import { NavLink } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

import FinalHome from '../Home/FinalHome';

function Navbar() {
    
  const [searchParams , SetSearchParams] = useSearchParams();

  return (
    <>
        <nav className='nav-container' >
       
        <div className = "toggle"> <img  src = { toggle }  /></div>
      
            <NavLink to = {`/`} className = 'W'  >
                    <a href="#" ><div className="icon"> <img  src={ Udemy_logo }/></div> </a>
              </NavLink>
           
            
            <div><a className="nav-text">Categories</a></div>
                 
                <div  className='fill'  >           
                    <input   className='input1'  onChange = { () => SetSearchParams({ "search" : document.getElementById( "search" ).value }) }  type="text" title="Search" placeholder="Search for anything" id="search" />  

                    <div className = 'WW'>
                        
                        <NavLink to = {`/?${searchParams}`}   >
                          <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" class="bi bi-search mySearch" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                        </NavLink> 
                    </div>


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