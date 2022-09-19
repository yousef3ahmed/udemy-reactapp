import React from 'react';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FinalHome from './components/Home/FinalHome';
import FinalProduct from './components/Product/FinalProduct';
import Test from './components/Home/Test';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <BrowserRouter  basename={process.env.PUBLIC_URL} >
    <Routes>
       <Route path="/" element={<FinalHome />} />
       <Route path="/test" element={<Test />} />
       <Route path="/product/:id" element={<FinalProduct />} />
       <Route path= {`/?=/:param`} element = { <FinalHome /> } >  </Route>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
