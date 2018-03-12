import React, { Component } from 'react';
import $ from "jquery";

class TableArticle extends Component {
    // constructor(props){
    //     super(props);
        
    // }
    render() {
        const article = this.props;
        let fabula = `${article.tabl.organ_sort} ЕО ${article.tabl.eo} от ${article.tabl.date} ст.${article.tabl.stat}-${article.tabl.hast}`;
        return (
            <tr>
                
                <td>{article.tabl.number}</td>
                <td>{article.tabl.imei}</td>
                <td  style={{textAlign:'justify'}} onClick={this.factOpen}>{fabula}</td>
                <td>{article.tabl.date_vvod}</td>
                <td><input  type="checkbox" ></input></td>
                <td><input className="form-control" type="date" defaultValue={article.tabl.data_posilki}></input></td>
                <td>2</td>
                <td><input className="form-control" type="date" defaultValue={article.tabl.dovidka}></input></td>
                <td>3</td>
                <td>  </td>
            </tr>
        );
    }
    factOpen = () =>{
        $(".searchNomer ").load("380677986423.txt");
    }
    
    
}

export default TableArticle;