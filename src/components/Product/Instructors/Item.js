import React from 'react';
import '../../../index.css'

function Item( props ) {
  return (
    <>
        
        <a href='#' > <h5> { props.data.name  }</h5> </a>
        <p className='insP' > { props.data.job  } </p>
        <div className='insDup' >
            
            <div className='sora' > 
                <img className="rounded-circle shadow-1-strong me-3"
                src= { props.data.img } alt="avatar" width="112"
                height="112" />
            </div>
            
            <div className='instMar' >
                

                <div className='instMarP' >
                    <div className='instMarDiv' > <svg xmlns="http://www.w3.org/2000/svg"  width="13" height="13" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>

                        <p className='PP' >4.4 Instructor Rating</p>
                    </div>
                </div>

                <div className='instMarP' >
                    <div className='instMarDiv' > <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <p className='PP' >73,859 Reviews</p>
                    </div>
                </div>

                <div className='instMarP' >
                    <div className='instMarDiv' > <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>

                        <p className='PP' >892,299 Students</p>
                    </div>
                </div>

                <div className='instMarP' >
                        <div className='instMarDiv' > <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        </svg>
                        <p className='PP' >16 Courses</p>
                    </div>
                </div>

            </div>


        </div>

        <p className='instMarPP' > { props.data.description } </p>
    </>
  )
}

export default Item