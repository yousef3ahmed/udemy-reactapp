import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import NeastedContent from './NeastedContent';
import Fetch from './Fetch';
import { Routes, Route, useParams } from "react-router-dom";

function Content() {
  
  let params = useParams();
  
  return (
    <div className='smallCon' >
        <Accordion defaultActiveKey="0" alwaysOpen>
        <Fetch id = { params.id } ></Fetch>
    </Accordion>
    </div>
  )
}

export default Content ;