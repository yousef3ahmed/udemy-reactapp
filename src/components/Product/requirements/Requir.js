import React from 'react';
import Fetch from './Fetch';
import { Routes, Route, useParams } from "react-router-dom";


function Requir() {
    
    let params = useParams();
    return (
   
   <div className='Requir' >
    <h2> <b> Requirements </b> </h2>
        <ul>    
            <Fetch id = { params.id } ></Fetch>
        </ul>
    </div>
  )
}

export default Requir;