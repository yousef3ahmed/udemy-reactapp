import React from 'react';
import '../../../index.css';

const arr = ["1", "2", "3" , "4" , "5"];


function Star( props ) {
  return (
    <div className='star' >

        {
          arr.map( ( item , index ) =>{
            if( index + 1 > props.cnt  ){
             return(
              <span class="fa fa-star"></span>
             ) 
            }else{
              return(
                <span class="fa fa-star checked"></span>
              )
            }
          })
        }

    </div>
  )
}

export default Star;