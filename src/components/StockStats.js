import React from 'react';

export default function StockStats(props) {
  
    var info = JSON.parse(props.data)
    info = Object.values(info)
    var k = {}
    for (var [key, value] of Object.entries(props.realData)) {
        let min = Math.min.apply(Math, props.realData[key].map(function(o) { return o.value; }))
        let max = Math.max.apply(Math, props.realData[key].map(function(o) { return o.value; }))
        let ultimo = props.realData[key][props.realData[key].length - 1].value
        let variacion = (ultimo-props.realData[key][0].value) / props.realData[key][0].value
        k[key] = {}
        k[key]['min'] = min 
        k[key]['max'] = max 
        k[key]['ultimo'] = ultimo 
        k[key]['variacion'] = variacion 
    }
  return (
    <div>
    
    <h3> Actualmente se muestra la información de {info.length} acciones</h3>
        <table className="table"> 
    <thead>
      <tr className="table">
          <th> Ticker </th>
          <th> Volumen Transado  </th>
          <th> Alto Historico  </th>
          <th> Bajo Historico </th>
          <th> Último Precio </th>
          <th> Variación Porcentual </th>
          <th> Volumen Compra </th>
          <th> Volumen Venta </th>
      </tr>
      </thead>
      <thead>
    
      {info.map((stock) => (
        <tr>
            <td> {stock['ticker']} </td>
            <td> {Math.abs(stock['volumenTransado'])} </td>
            <td> {k[stock['ticker']] ? k[stock['ticker']]['max'] : 0} </td>
            <td> {k[stock['ticker']] ? k[stock['ticker']]['min'] : 0} </td>
            <td> {k[stock['ticker']] ? k[stock['ticker']]['ultimo'] : 0} </td>
            <td> {k[stock['ticker']] ? k[stock['ticker']]['variacion'] : 0} </td>
            <td> {stock['volumenCompra']} </td>
            <td> {stock['volumenVenta']} </td>
        </tr>
        ))
        }
        </thead>
     
      </table>
    </div>
  );
};