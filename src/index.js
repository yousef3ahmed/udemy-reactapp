import React from 'react';
import './index.css';

import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FinalHome from './components/Home/FinalHome';
import FinalProduct from './components/Product/FinalProduct';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<FinalHome />} />
       <Route path="/product/:id" element={<FinalProduct />} />
       <Route path= {`/?=/:param`} element = { <FinalHome /> } >  </Route>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
