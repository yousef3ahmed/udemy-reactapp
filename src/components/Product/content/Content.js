import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import NeastedContent from './NeastedContent';
import Fetch from './Fetch';


function Content() {
  return (
    <div className='smallCon' >
        <Accordion defaultActiveKey="0" alwaysOpen>
        <Fetch></Fetch>
    </Accordion>
    </div>
  )
}

export default Content ;