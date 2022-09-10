import React from 'react';
import '../../../index.css';
import Create from './Create';



function NavbarSection() {


  return (
    <div className='NavbarSection' >
        
        <div className='margin-md' >
            
            <p className='col' ><p>Development 
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>  
         
            Programming Languages
            
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>        
              Python</p></p>

          <Create></Create>

          <div className='respon' >
                <h2><b>E£269.99</b></h2>
                <button type="submit" class="btn btn-primary" className=' btn btn-primary BUtn' >Add to cart</button>
                <p className='FlayPPP' >1 day left at this price!</p>
                <p className='FlayPPP' >30-Day Money-Back Guarantee</p>
                
                <div className='FlyColl' >
                    <a href='#' className='resetAA'  > <b> Share </b>  </a>
                    <a href='#' className='resetAA'  > <b> Gift this course </b>  </a>
                    <a href='#' className='resetAA'  > <b> Apply Coupon </b>  </a>
                  </div>
              </div>
          </div>
 
       
    </div>
  )
}

export default NavbarSection