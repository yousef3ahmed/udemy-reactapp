
import React from 'react';
import Item from './Item';




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
        fetch("https://yousef3ahmed.github.io/virtualize-data-/db.json")
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

                        if( this.props.id == item.id ){
                            return(
                                item["reviewers"].map(( vals , indx ) =>{
                                    return(
                                        <Item name = { vals.name }  content = { vals.review } ></Item>
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