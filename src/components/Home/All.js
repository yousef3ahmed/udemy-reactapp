
import '../../index.css';
import Fetch from './Fetch'

import { useSearchParams } from "react-router-dom";

  
function  All( )  {
    
  const [searchParams , SetSearchParams] = useSearchParams();
 
  let search = searchParams.get( "search" ) ;
  console.log( "searchParams in All  = " + search );

  
    return(
        <div className='cards-wrapper' >
          <Fetch Search = { search } ></Fetch>
        </div>
 
    );
}


export default  All  ;