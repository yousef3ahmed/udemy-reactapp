import React from 'react';
import Star from './Star'
import Rate from './Rate';
import '../../../index.css';



function Container() {
  return (
    <div className='feedback'>
        <h2>Student feedback</h2>

        <Rate cnt = { 5 } Class = { 'f85' } ></Rate>
        <Rate cnt = { 4 } Class = { 'f75' } ></Rate>
        <Rate cnt = { 3 } Class = { 'f50' } ></Rate>
        <Rate cnt = { 2 } Class = { 'f25' } ></Rate>
        <Rate cnt = { 1 } Class = { 'f10' } ></Rate>

    </div>
  )
}

export default Container;