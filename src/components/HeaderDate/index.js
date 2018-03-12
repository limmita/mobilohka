import React, { Component } from 'react';
import InputDate from './InputDate';
import './style.css';

class HeaderDate extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isOpen: true
    //     }
    // }
    

    
    render() {
        const date = new Date();
        const year = date.getFullYear();
        return (
            

        <div className="float-left">
            <div className="col-2">
                <InputDate  data={year}/>
            </div>
            <div className="col-2">
                <InputDate data={year+1}/>
            </div>     
        </div>


        );
    }
    
}

export default HeaderDate;