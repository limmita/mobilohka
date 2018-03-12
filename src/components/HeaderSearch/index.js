import React, { Component } from 'react';


class HeaderSearch extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isOpen: true
    //     }
    // }
    

    
    render() {
        
        return (

        <div className="float-right">
  
          <div className="form-group mx-sm-3 mb-2">  
            <input type="text" className="form-control" id="inputPassword2"></input>
            <button type="submit" className="btn btn-primary mb-2">Search</button>
          </div>
          
        </div>


        );
    }
    
}

export default HeaderSearch;