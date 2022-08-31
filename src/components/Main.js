import React from 'react'
import '../index.css';
import alarm from "../images/alarm.png";
import alarm2 from "../images/alarm2.png";

function Main() {
  return (
    <section className="alarm-container">
    <div> <img className="alarm" src = { alarm }  /></div>
    <div className="alarm2-container">
        
        <div> <img className="alarm2" src={ alarm2 }/></div>
        <div className="text1" >
            <h1> New to Udemy? Lucky you.</h1>
            <p>Courses start at E€169.99. Get your new-student offer before it expires.</p>
        </div>
    </div>
</section>
  )
}

export default Main