import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Course from './Cource';
import All from './All';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <div className='text3' >
     
     <article className='text3s1'>
                <h1>Expand your career opportunities with Python, Excel, Web Development, JavaScript... </h1>
                <p>Take one of Udemy’s range of courses and learn how to code using this incredibly useful language.</p>
                <p>Its simple syntax and readability makes  perfect for Flask, Django, data science, and machine learning.</p>
                <p>You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>      
        </article>

      
      <All></All>


  </div>



);

reportWebVitals();
