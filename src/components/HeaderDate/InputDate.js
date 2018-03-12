import React, { Component } from 'react';

class InputDate extends Component {
    state = {
        value: `${this.props.data}-01-01`
    }

    render() {

        return (
            <div>
              <input
               className="form-control" 
               type="date"
                defaultValue={this.state.value}>
             </input> 
            </div>
        );
    }
    
}

export default InputDate;