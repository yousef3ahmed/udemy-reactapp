import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';



function Course( props ){
    
   
    console.log( props.Description );
    
    let ID_ = props.id;

    return(

       <div className = "card"  style={{width : '15rem'}} >
            <img className='card-img-top' src={ props.Image } alt="Card image cap"/>
            <div className="card-body">
                <h5 className = "card-title">{ props.Title } </h5>
                <p className="card-text">{ props.Description } </p>
                
                <NavLink to = {`/product/${ID_}`} className = 'W'  >
                    <a href="#" className="btn btn-primary">To More Details</a>
                </NavLink>
                
            </div>
        </div>

    );
}

export default Course ;