import React from 'react' ;
import Navbar from './Navbar';
import Main from './Main';
import Section2 from './Section2';
import Section from './Section';
import Footer from './../Product/Footer'

function FinalHome() {
  return (
    <>
        <Navbar></Navbar>
        <Main></Main>
        <Section2></Section2>
        <Section></Section>
        <Footer></Footer>
    </>
  );
}

export default FinalHome;