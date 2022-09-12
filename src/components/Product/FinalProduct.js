import React from 'react';
import Navbar from './Navbar';
import NavbarSection from './Navbar/NavbarSection';
import About from './About';
import Footer from './Footer';
import Content from './content/Content';
import Comments from './Comment/Comments';
import Container from './Feedback/Container';
import Instructors from './Instructors/Instructors';
import Requir from './requirements/Requir';
import Descriptions from './Descriptions/Descriptions';
import Fly from './Fly/Fly';
import '../../index.css';

function FinalProduct() {
 
 
  return (
    <>  
        <Navbar></Navbar>
        
        <NavbarSection></NavbarSection>
        
        <div className='MerAll' >
          
          <div className='toStaky' >
            
            <div className='Weg' >
              <About></About>
              <h4 className='dowNM' > <b> Course content </b>  </h4>
              <Content></Content>
              <Requir></Requir>
              <Descriptions></Descriptions>
              <Instructors></Instructors>
              <Container></Container>
              <Comments></Comments>
            </div>

            <Fly></Fly>
          </div>
           
        </div>

        <Footer></Footer>
    </>
  );
}

export default FinalProduct;