import React, { Component } from 'react';
import TableList from './TableList';
import $ from "jquery";
import './style.css';

import { connect } from 'react-redux'

class TableNomer extends Component {

    componentDidMount(){
        let url = 'https://south.pp.ua/destop/index.php';
        $.ajax({
          method: "POST",
          url: url,
          data: { organ: "48", position: "start" }
        })
          .done((msg) => {
            let dataServer = JSON.parse(msg);
            this.props.adddispath(dataServer);
          });
    }
    
    
    render() {
        return (
        <div className="tableNomer table-responsive-sm">
            <TableList tables={this.props.dataTablelist.numberlist} />
        </div>
        );
    }
    
}

export default connect(
  state => ({
    dataTablelist:state
  }),
  dispatch => ({
    adddispath:(dataServer) =>{
        dispatch({ type: "NUMBER_LIST_SUCCESS", payload: dataServer })
    }
  })
)(TableNomer);

