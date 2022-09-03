import React from 'react';
import '../../index.css';

function Section2() {
  return (
    <>
        <section className="text2">
            <h1>A broad selection of courses</h1>
            <p>Choose from 185,000 online video courses with new addtions published every month</p>
           
            <button type="button" className="space btn btn-primary mb-2" id="Python" value="Python" onclick= "Choose( 'Python' )"  >Python</button>
            <button type="button" className="space btn btn-primary mb-2" id="Excel" value="Excel" onclick= "Choose( 'Excel' )"  >Excel</button>
            <button type="button" className="space btn btn-primary mb-2" id="Web" value="Web" onclick= "Choose( 'Web' )" >Web Development</button>
            <button type="button" className="space btn btn-primary mb-2" id="JavaScript" value="JavaScript" onclick= "Choose( 'JavaScript' )" >JavaScript</button>
            <button type="button" className="space btn btn-primary mb-2" id="Data" value="Data" onclick= "Choose( 'Data' )" >Data Science</button>
            <button type="button" className="space btn btn-primary mb-2" id="AWS" value="AWS" onclick= "Choose( 'AWS' )" >AWS Certification</button>
            <button type="button" className="space btn btn-primary mb-2" id="Drawing" value="Drawing" onclick= "Choose( 'Drawing' )" >Drawing</button>

        </section>
    </>
  );
}

export default Section2