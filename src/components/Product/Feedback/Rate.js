import React from 'react';
import Star from './Star';
import '../../../index.css'

function Rate( props ) {
  return (
    <div className='feedall' >
            <div className='feed' >
               
                <div className = { props.Class }  >  </div>  
            </div>
            <Star cnt = { props.cnt } ></Star>
    </div>
  )
}

export default Rate