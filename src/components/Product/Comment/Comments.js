import React from 'react';
import '../../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import Fetch from './Fetch';

function Comments() {
  return (

            <div className='comment' >
               
                <div className="card-body p-4">       
                    <h4 className="mb-0">Recent comments</h4>
                    <p className="fw-light mb-4 pb-2">Latest Comments section by users</p>

                    <Fetch></Fetch>

                </div>
      
          </div>

  )
}

export default Comments