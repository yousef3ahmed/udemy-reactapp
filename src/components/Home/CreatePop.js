import React from 'react';

function CreatePop( props ) {
  return (
    <div className='Pop_ya_pop' >
        
        <div className='popdown' ><b> { props.Desc } </b></div>
        
        <p className='Popsmal' > Updated <b> May 2022  </b> </p>
        <p className='Popsmal' > 21 total - hoursAll - LevelsSubtitles </p>
        <p className='popP' > { props.toPop } </p>
        <hr/>
        <div className='POPmar' > 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
            <span className='popP' >Create their own Python Programs</span>
        </div>

        <div className='POPmar' > 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
            <span className='popP' >Parse the Web and Create their own Games</span>
        </div>

        <div className='POPmar' > 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
            <span className='popP' >Become an experienced Python Programmer</span>
        </div>

        <hr/>
        
        <div className='too' >
          <a href="#" className="btn btn-primary btnN-primary">Add to cart</a>
        </div>
        

    </div>
  )
}

export default CreatePop;