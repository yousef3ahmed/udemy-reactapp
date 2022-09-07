import React from 'react'
import Course from './Cource';
import '../../index.css';



class Fetch extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:5400/Python")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <>
            {
                items.map((item) => ( 
                    <Course id = { item.id }  Description = { item.Description } Image = { item.Image } Title = { item.Title }  ></Course>
                ))
            }
        </>
    );
}
}


export default Fetch;