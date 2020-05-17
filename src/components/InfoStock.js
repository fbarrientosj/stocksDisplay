import React from 'react';

export default function InfoStock(props) {
  
    
    var info = props.data
    info = Object.values(info);
  return (
    <div>
    <h1> Detalle estático Bursatil </h1>
    <table className="table"> 
    <thead>
      <tr className="table">
          <th> Nombre de la compañía </th>
          <th> Ticker de la acción  </th>
          <th> País de origen  </th>
      </tr>
      </thead>
      <thead>
      {info.map((stock) => (
        <tr>
            
            <td> {stock['company_name']} </td>
            <td> {stock['ticker']} </td>
            <td> {stock['country']} </td>
        
        </tr>
        ))
        }
     
        </thead>
     
      </table>
  
    </div>
  );
};