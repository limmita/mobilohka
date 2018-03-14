import React from 'react';
import TableArticle from './TableArticle';


export default function TableList(props){
   
   let tbs = props.tables;


   //{tableElement}
     let tableElement = Object.values(tbs).map((tabl) => 
        <TableArticle key={tabl.id}
            tabl={tabl}
        
      />);


            
        return (

        <table className="table  table-hover  table-sm" >
            <thead className="thead-dark">
                 <tr>
                    <th>Номер</th>
                    <th>IMEI</th>
                    <th>Факт</th>
                    <th>Ввод</th>
                    <th>Армор</th>
                    <th>Дата отпр.</th>
                    <th>Статус</th>
                    <th>Справка</th>
                    <th>Результ</th>
                    <th>Прим</th>
                 </tr>
            </thead>
            <tbody>
                {tableElement}
            </tbody>    
        </table>
        );

    
}
