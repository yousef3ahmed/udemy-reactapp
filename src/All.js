import Course from './Cource';
import './index.css';

let Python = [  

    { 
      "ID": 1,
      "Title": "Avinash Jain, The Codex",
      "Description": "Learn Python: The Complete Python Programming Course" ,
      "Image":"https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg"
    },
    { 
      "ID": 2,
      "Title": "Jose Portilla",
      "Description": "Learning Python for Data Analysis and Visualization" ,
      "Image":"https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg"
    },
    { 
      "ID": 3,
      "Title": "Edwin Diaz, Coding Faculty Solutions",
      "Description": "Python for Beginners - Learn Programming from scratch" ,
      "Image":"https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg"
    },
    { 
      "ID": 4,
      "Title": "Abrar Hussain",
      "Description": "Learn Python: Python for Beginners" ,
      "Image":"https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg"
    },
    { 
      "ID": 5,
      "Title": "Infinite Skills",
      "Description": "Python Beyond the Basics - Object-Oriented Programming" ,
      "Image":"https://img-c.udemycdn.com/course/750x422/577248_3b6f_13.jpg"
    } 
  ];
  
function All( ) {
    return(
        <div className='cards-wrapper' >
            { Python.map(item => {
              return (
                <Course  Description = { item.Description } Image = { item.Image } Title = { item.Title }  ></Course>
              );

            })}
        </div>
 
    );
}


export default All ;