import React, { Component } from 'react';
import $ from "jquery";
// import PropTypes from 'prop-types'

class TableArticle extends Component {
   state = {
            isOpenN: true,
            isOpenI: true,
            dataPosilki: '',
            dovidka: '',
            number: '',
            imei: '',
            checked: false,
            status:'',
            result:'',
            primitka:''
        }

    render() {
        const styleBorder = {textAlign:'justify', borderRightColor:"black", borderRightStyle: 'solid', borderRightWidth: '1px'}
        const article = this.props;
        let fabula = `${article.tabl.organ_sort} ЕО ${article.tabl.eo} от ${article.tabl.date} ст.${article.tabl.stat}-${article.tabl.hast}`;
        let numberTD =  article.tabl.number;
        let imeiTD = article.tabl.imei;
        return (
            <tr>
                <td style={styleBorder} onDoubleClick={this.commentOpenNumber} onClick={this.clicNumber}>
                   {this.state.isOpenN ? numberTD : <input className="number"
                    
                    type="text"
                    data-id={article.tabl.id}
                    onChange={this.numberChange}
                    ref={(input) => { this.numberInput = input }}
                    value={this.state.number || numberTD}>
                    </input>

                    }        
                </td>
                <td style={styleBorder} onDoubleClick={this.commentOpenImei}>
                   {this.state.isOpenI ? imeiTD : <input className="imei" 
                   type="text"
                   data-id={article.tabl.id}
                   onChange={this.imeiChange}
                   ref={(input) => { this.imeiInput = input }}
                   value={this.state.imei || imeiTD}>
                    </input>}        
                </td>
                <td  style={styleBorder}>{fabula}</td>
                <td>{article.tabl.date_vvod}</td>
                <td>
                    <input className="armor"  type="checkbox"
                    data-id={article.tabl.id}
                    checked={this.state.checked}
                    onChange={this.checkedChange}
                    ref={(input) => { this.checkedInput = input }}

                    ></input></td>
                <td>
                    <input className="data_posilki" type="date"
                        data-id={article.tabl.id}
                        onChange={this.dataPosilkiChange}
                        ref={(input) => { this.dataPosilkiInput = input }} 
                        value={this.state.dataPosilki || article.tabl.data_posilki}>                
                     </input>
                 </td>
                <td><input className="status" type="text"
                   data-id={article.tabl.id}
                   onChange={this.statusChange}
                   ref={(input) => { this.statusInput = input }}
                   value={this.state.status || article.tabl.status}>
                </input></td>
                <td>
                <input className="dovidka" type="date"
                    data-id={article.tabl.id}
                    onChange={this.dovidkaChange}
                    ref={(input) => { this.dovidkaInput = input }}
                    value={this.state.dovidka || article.tabl.dovidka}>
                </input></td>



                <td><input className="result" type="text"
                    data-id={article.tabl.id}
                    onChange={this.resultChange}
                    ref={(input) => { this.resultInput = input }}
                    value={this.state.result || article.tabl.result}>
                    </input></td>





                <td><input className="primitka"  type="text"
                    data-id={article.tabl.id}
                    onChange={this.primitkaChange}
                    ref={(input) => { this.primitkaInput = input }}
                    value={this.state.primitka || article.tabl.primitka}>
                    </input></td>
            </tr>
        );
    }
    clicNumber = () =>{
            fetch('./380995009067.txt').then( 
  function(a){ a.text().then(
    function(data){ 
       // let str = iconv.decode(new Buffer(data), 'win1251');
       // let str = iconv.decode(new Buffer(data), 'win1251');
       // let buf = iconv.encode(str, 'utf8')

       
// console.log(str); 
    });
  
});

            // $('.searchNomer').load('./380995009067.txt');
    }
    primitkaChange = (event) =>{
        let id, val, pole
        id = $(this.primitkaInput).data('id')
        val = event.target.value
        pole = $(this.primitkaInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                primitka: val
            })
    }
    resultChange = (event) =>{
        let id, val, pole
        id = $(this.resultInput).data('id')
        val = event.target.value
        pole = $(this.resultInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                result: val
            })
    }
    statusChange = (event) =>{
        let id, val, pole
        id = $(this.statusInput).data('id')
        val = event.target.value
        pole = $(this.statusInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                status: val
            })
    }
    checkedChange = (event) =>{
        let id, val, pole
        id = $(this.checkedInput).data('id')
        val = !this.state.checked
        pole = $(this.checkedInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                checked: !this.state.checked
            })
    }
    imeiChange = (event) =>{
        let id, val, pole
        id = $(this.imeiInput).data('id')
        val = event.target.value
        pole = $(this.imeiInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                imei: val
            })
    }
    numberChange = (event) =>{
        let id, val, pole
        id = $(this.numberInput).data('id')
        val = event.target.value
        pole = $(this.numberInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                number: val
            })
    }

    commentOpenNumber = () =>{
        this.setState({
            isOpenN: false
        })
    }
    commentOpenImei = () =>{
        this.setState({
            isOpenI: false
        })
    }
    dataPosilkiChange = (event) =>{
        let id, val, pole
        id = $(this.dataPosilkiInput).data('id')
        val = event.target.value
        pole = $(this.dataPosilkiInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                dataPosilki: val
            })
    }

    dovidkaChange = (event) =>{
        let id, val, pole
        id = $(this.dovidkaInput).data('id')
        val = event.target.value
        pole = $(this.dovidkaInput).attr("class")
        this.setBd(id, val, pole)
            this.setState({
                dovidka: val
            })
    }
   
    setBd = (id, val, pole) =>{
        $.ajax({
          method: "POST",
          url: 'https://south.pp.ua/destop/index.php',
          data: { organ: "48", position: "change", id:id, val:val, pole:pole }
        })
          .done((msg) => {
            console.log("Данные на сервере!")
          });
    }
}

export default TableArticle;