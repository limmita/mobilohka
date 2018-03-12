import React, { Component } from 'react';
import SearchNomer from './SearchNomer';
import TableNomer from './TableNomer';

class Container extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isOpen: true
    //     }
    // }
    

    
    render() {
        
        return (

        <div className="container-fluid">
            <SearchNomer />
            <TableNomer />         
        </div>


        );
    }
    
}

export default Container;