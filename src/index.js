import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import All from './components/All';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section2 from './components/Section2';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <>

   <Navbar></Navbar>
   <Main></Main>
   <Section2></Section2>
   <Section></Section>
 
  </>
  


);

reportWebVitals();
