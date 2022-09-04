
import React from 'react'
import NeastedContent from './NeastedContent';


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
        fetch("http://localhost:5400/content")
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
                items.map((item , index) => (  
                 <NeastedContent  id = { index } title = { item[0][0] }  Arrinside = { item[1] } ></NeastedContent>   
                ))  
            }


        </>
    );
}
}


export default Fetch;