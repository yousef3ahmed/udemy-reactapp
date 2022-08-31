import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';




function Course( props ){
    
    console.log( props.Description );

    return(

       <div className = "card"  style={{width : '15rem'}} >
            <img className='card-img-top' src={ props.Image } alt="Card image cap"/>
            <div className="card-body">
                <h5 className = "card-title">{ props.Title } </h5>
                <p className="card-text">{ props.Description } </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
}

export default Course ;