import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Item from './Item';
import '../../../index.css';

function NeastedContent( props ) {
  return (
    <>
        <Accordion.Item eventKey={ props.id }>
        
        <Accordion.Header>{ props.title }</Accordion.Header>
        <Accordion.Body>
          {/*  here i am create Items  */}

          <div className='WarrpCol' >
              {
                props.Arrinside.map((item , index) => (  
                  <Item  title = { item }   ></Item>   
                ))
              }
          </div>
         

        </Accordion.Body>
      </Accordion.Item>

    </>

  );
}

export default NeastedContent