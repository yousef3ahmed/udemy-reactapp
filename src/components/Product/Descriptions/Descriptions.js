import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import Fetch from './Fetch';


function Descriptions() {
 
    let params = useParams();

    return (
    <div className='Descriptions' >
        
        <h2> <b> Description </b> </h2>

        <Fetch id = { params.id } ></Fetch>
    </div>
  )
}

export default Descriptions