import React from 'react' ; 
import Item from './Item';
import Fetch from './Fetch';

import { Routes, Route, useParams } from "react-router-dom";


function Instructors( props ) {

  let params = useParams();

  return (
    <div className='instructors' >
        <h3> <b>Instructors</b> </h3>

        <Fetch id = { params.id } ></Fetch>
         
    </div>
  )
}

export default Instructors ;