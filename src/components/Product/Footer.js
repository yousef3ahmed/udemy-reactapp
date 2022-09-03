import React from 'react'

function Footer() {
  return (

  <footer className="foo">
 
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
 
        <div className="me-5 d-none d-lg-block">
        <h5><p>Top companies choose Udemy Business to build in-demand career skills.</p></h5>
        </div>
    
        <div>
        <a href="" className="me-4 link-secondary">
            <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg' />  
        </a>
        <a href="" className="me-4 link-secondary">
        <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' />  
        </a>
        <a href="" className="me-4 link-secondary">
        <img src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' />  
        </a>
        <a href="" className="me-4 link-secondary">
        <img src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' />  
        </a>
        <a href="" className="me-4 link-secondary">
        <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' />  
        </a>
        
        </div>
   
    </section>
 

    <div className="wrapper"> 
        
        <div className="inside">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          
          <div className='wrapper2' >
            
            <a href="#!"  className='reset'>Angular</a>
            
            <a href="#!" className='reset'>React</a>
         
            <a href="#!" className='reset'>Vue</a>
           
            <a href="#!" className='reset' >Laravel</a>
          </div>
         
        </div>

        <div className="inside">
          
          <h6 className="text-uppercase fw-bold mb-4">
          Useful links
          </h6>
          
          <div className='wrapper2' >
            
            <a href="#!"  className='reset'>Pricing</a>
            
            <a href="#!" className='reset'>Settings</a>
         
            <a href="#!" className='reset'>Orders</a>
           
            <a href="#!" className='reset' >Help</a>
          </div>
         
        </div>

        <div className="inside">
          
          <h6 className="text-uppercase fw-bold mb-4">
          Terms
          </h6>
          
          <div className='wrapper2' >
            
            <a href="#!"  className='reset'>Pricing</a>
            
            <a href="#!" className='reset'>Settings</a>
         
            <a href="#!" className='reset'>Orders</a>
           
            <a href="#!" className='reset' >Help</a>
          </div>
         
        </div>
        
    </div>

 
    <div>
        <div className="right">
            © 2022 Udemy, Inc.
        </div>

        <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' className='resetimg'  />

    </div>
    
  </footer>
  )
}

export default Footer ;