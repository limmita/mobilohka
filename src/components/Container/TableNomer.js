import React, { Component } from 'react';
import TableList from './TableList';
import $ from "jquery";
import './style.css';

class TableNomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataTable: ''
        }
    }
    componentDidMount(){

 
        let url = 'https://south.pp.ua/destop/index.php';
        $.ajax({
          method: "POST",
          url: url,
          data: { organ: "48", position: "start" }
        })
          .done((msg) => {
            let dataServer = JSON.parse(msg);
            this.setState({dataTable: dataServer});
          });
    }
    

    
    render() {
        
        return (

        <div className="tableNomer table-responsive-sm">
            <TableList tables={this.state.dataTable} />
        </div>
        );
    }
    
}

export default TableNomer;