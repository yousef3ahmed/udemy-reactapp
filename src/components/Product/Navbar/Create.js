import React from 'react';
import Fetch from './Fetch';
import Star from './Star';
import { Routes, Route, useParams } from "react-router-dom";

function Create() {
    
    let params = useParams();

    return (
        <div className='Create' >
            <Fetch id = { params.id } ></Fetch>

            
        </div>
  )
}

export default Create