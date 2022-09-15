import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import CreatePop from './CreatePop';


function Course( props ) {
    
    let ID_ = props.id;
    return (
    <Popup
        trigger={
            <div className = "card"  style={{width : '15rem'}}  >
                <img className='card-img-top' src={ props.Image } alt="Card image cap"/>
                <div className="card-body">
                    <h5 className = "card-title">{ props.Title } </h5>
                    <p className="card-text">{ props.Description } </p>
                    
                    <NavLink to = {`/product/${ID_}`} className = 'W'  >
                        <a href="#" className="btn btn-primary">To More Details</a>
                    </NavLink>
                    
                </div>
             </div>
        }   
        
        contentStyle={{ width: "350px"}}
        position="right top"
        on="hover"
        // className='CreatePop'
        closeOnDocumentClick
        mouseLeaveDelay={100}
        mouseEnterDelay={0}
        arrow={false}
    >
    
    <CreatePop Desc = { props.Description } toPop = { props.toPop } ></CreatePop>

    

  </Popup>

  )
}

export default Course ;