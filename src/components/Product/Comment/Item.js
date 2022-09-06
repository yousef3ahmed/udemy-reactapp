import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item( props ) {
  return (
    
    <>
     <div className="d-flex flex-start">
        <img className="rounded-circle shadow-1-strong me-3"
            src="https://slp-statics.astockcdn.net/static_assets/staging/21spring/vectors/curated-collections/card-1.webp" alt="avatar" width="60"
            height="60" />
        <div>
            <h6 className="fw-bold mb-1">{ props.name }</h6>
            <div className="d-flex align-items-center mb-3">
                <p className="mb-0">
                    March 07, 2021
                    <span className="badge bg-primary">Pending</span>
                </p>
                <a href="#!" className="link-muted">  
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill toLeft" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg> </a>
                
                <a href="#!" className="link-muted">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise toLeft" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg> </a>
                
                <a href="#!" className="link-muted"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className = "bi bi-suit-heart-fill toLeft " viewBox="0 0 16 16">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                </svg></a>

                </div>
                <p className="mb-0">
                    { props.content }
                </p>
            </div>
        </div>
        <hr/>
    </>
    
  )
}

export default Item ;