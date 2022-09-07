
import React from 'react';

import '../../../index.css'


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
                items.map( ( item , index ) =>{

                        if( this.props.id == item.id ){
                            return(
                                item["descriptions"].map(( vals , indx ) =>{
                                    return(
                                        <p className='desc' > { vals } </p>
                                    )
                                })
                            )
                        }
                })

            }

        </>
    );
}
}


export default Fetch;