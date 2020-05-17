import React from 'react';




export default function Exchange(props) {
    
    
    var info = JSON.parse(props.data);
    info = Object.values(info);
    let exchanges = props.exchangeData
    let numberExchanges = exchanges.length;
    let stats = []
    let sumAcciones = 0
    exchanges.forEach(function(exchange) {

        let particular = {volumenCompra: 0, volumenVenta: 0,volumenTotal: 0,
            cantidadAcciones: exchange.listed_companies.length,participacion : 0, name: exchange.name}

        for (let i = 0; i < info.length; i++) {
    
            if (exchange.listed_companies.indexOf(info[i]['companyName']) > -1){
                particular['volumenCompra'] += Math.abs(info[i]['volumenCompra']);
                particular['volumenVenta'] += Math.abs(info[i]['volumenVenta']);
                particular['volumenTotal'] += Math.abs(info[i]['volumenTransado']);
                sumAcciones += Math.abs(info[i]['volumenTransado'])
            }
        };
        stats.push(particular)
    });
    
    stats.map((market) => {
        sumAcciones += market['cantidadAcciones'] 
    })
    

  return (
    <div>
        <br></br>
        <h2>Información de mercados</h2>
  <h3>En este visor se muestran {numberExchanges} bolsas</h3>
        <br></br>
        <table className="table"> 
    <thead>
      <tr className="table">
          <th> Nombre de Exchange </th>
          <th> Volumen Transado  </th>
          <th> Volumen Compra  </th>
          <th> Volumen Venta </th>
          <th> Numero acciones </th>
          <th> Participacion Mercado </th>

      </tr>
      </thead>
      <thead>
    
      {stats.map((exchange) => (
        <tr>
            <td> {exchange['name']} </td>
            <td> {exchange['volumenTotal'] >= 0 ? exchange['volumenTotal'] : exchange['volumenTotal'] * -1} </td>
            <td> {exchange['volumenCompra']} </td>
            <td> {exchange['volumenVenta']} </td>      
            <td> {exchange['cantidadAcciones']} </td>
            <td> {Math.round((Math.abs(exchange['volumenTotal'] / sumAcciones) + Number.EPSILON + Number.EPSILON) * 100000) / 1000} % </td>
            
        </tr>
        ))
        }
        </thead>
     
      </table>
    </div>
  );
};