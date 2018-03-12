import React, { Component } from 'react';
import './style.css';
import HeaderDate from '../HeaderDate';
import HeaderSearch from '../HeaderSearch';

class Header extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isOpen: true
    //     }
    // }
    render() {

        return (
            <div className="header">
              <HeaderDate />
              <HeaderSearch />
            </div>
        );
    }
    
}

export default Header;