import React from 'react'
import Course from './Cource';
import '../../index.css';

let dd = "";

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
        if (!DataisLoaded) return <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
            
        return (
           
        <>
            {
                    items.map( ( item , index ) =>{

                          dd = this.props.Search ;
                          let vv = dd + "";
                          vv = vv.substring(1);
                          console.log( "fetch = " + vv );

                          if( item.Description.includes( vv ) ){
                            return(
                                <Course id = { item.id }  Description = { item.Description } Image = { item.Image } Title = { item.Title }  ></Course>
                            )
                          }  
                    })
            }
        </>
     )
    }
}


export default Fetch;