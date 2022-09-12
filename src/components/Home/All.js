
import '../../index.css';
import Fetch from './Fetch'

import { useSearchParams } from "react-router-dom";

let Python  = [ ] ;
  
function  All( )  {
    
  const [searchParams , SetSearchParams] = useSearchParams();
  let dd = searchParams ;
  let vv = dd + "";
  vv = vv.substring(1);
  console.log( "searchParams = " + vv );

  
    return(
        <div className='cards-wrapper' >
          <Fetch Search = { searchParams } ></Fetch>
        </div>
 
    );
}


export default  All  ;