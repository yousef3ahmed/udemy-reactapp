import React from 'react';
import Navbar from '../Home/Navbar';
import NavbarSection from './NavbarSection';
import About from './About';
import Footer from './Footer';
import Content from './content/Content';
import Comments from './Comment/Comments';
import '../../index.css'


function FinalProduct() {
  return (
    <>
        <Navbar></Navbar>
        <NavbarSection></NavbarSection>
        <div className='MerAll' >
          
          <About></About>
          <h4 className='dowNM' > <b> Course content </b>  </h4>
          <Content></Content>
          
          <Comments></Comments>
        
        </div>

        
        
 
        <Footer></Footer>
    </>
  );
}

export default FinalProduct;