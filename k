import io from 'socket.io-client';
import React from 'react';
import { useEffect, useState } from 'react';



import MainChart from './components/MainChart';
import StockStats from './components/StockStats';
import Exchange from './components/Exchange';

const protocolo = "wss://";
const servidor = "le-18262636.bitzonte.com";
const ruta = "/stocks";

const socket = io(protocolo + servidor , {
  path: ruta
  });


function App() {
  
  const [stockCompanies, setstockCompanies] = useState([]);
  const [stock, setstock] = useState({})
  const [stats, setstats] = useState({})
  const [exchange, setexchange] = useState([])

  const disconnectSocket = () => {
    socket.disconnect()
  }
 
  const startSocket = () => {
    socket.on('UPDATE', current => {

      var data = {
        time: current.time,
        value: current.value
      }
      setstats(state => 
        ({...state, [current.ticker]: {...state[current.ticker], prices : state[current.ticker]['pices'].push(data)}}));
    });

    socket.on('BUY', current=> {
      
      setstats(state => 
        ({...state, [current.ticker]: {...state[current.ticker], volumenTransado : state[current.ticker]['volumenTransado']+current.volume}}));
      setstats(state => 
        ({...state, [current.ticker]: {...state[current.ticker], volumenCompra : state[current.ticker]['volumenCompra']+current.volume}}));
    })

    socket.on('SELL', current=> {
      
      setstats(state => 
        ({...state, [current.ticker]: {...state[current.ticker], volumenTransado : state[current.ticker]['volumenTransado']-current.volume}}));
      setstats(state => 
        ({...state, [current.ticker]: {...state[current.ticker], volumenVenta : state[current.ticker]['volumenVenta']+current.volume}}));
    })

  };

 useEffect(() => {
  
  
  

  socket.emit('STOCKS', () => {
  } )
  socket.on('STOCKS', data => {    
     
    for (var i = 0; i < data.length; i++) {
      let current = data[i]
  
      setstats(state => ({...state, [current.ticker]: {...(state[current.ticker] || {}),  'volumenTransado' : 0, 'altoHistorico' : 0, 'bajoHistorico' : 0,
      'ultimoPrecio' : 0, 
      'variacionPorcentual' : 0, 
      'volumenCompra' : 0, 
      'volumenVenta' : 0, 
      'numeroAcciones' : 0,
      'ticker': current.ticker,
      'companyName': current.company_name,
      'pices': []}}));
      setstockCompanies(currentData => [...currentData, data[i]])
    }
  });
  
  socket.emit('EXCHANGES', () => {
  } )
  socket.on('EXCHANGES', data => {
    var bolsas = Object.values(data);
    bolsas.map((bolsa) => {
      bolsa.stocks = []
      setexchange(currentData => [...currentData, bolsa])})
    }
    )

}, [])
  var graph = true; 
  if (graph){
  return (
    <div>
      <button onClick={() => disconnectSocket()}> Desconectar socket</button>
      <button onClick={() => startSocket()}> conectar socket</button>
      {Object.values(stats).map((company) => (
        
        <div className="chart"> 
        <h1 className="title"> {company.ticker} </h1>
          <div> 
            <MainChart key={company.ticker} data={company.pices} />
          </div>
        </div>
        ) )     
      }
    </div>
  );}
  else{
    return(
    <div>
      <button onClick={() => disconnectSocket()}> Desconectar socket</button>
      <button onClick={() => startSocket()}> conectar socket</button>
      <div>
        <StockStats data={JSON.stringify(stats)}/>
      </div>
      <div>
        <Exchange data={JSON.stringify(stats)} exchangeData={exchange}/>
      </div>
      <div>
      {stockCompanies.map((company) => (
        <div className="chart"> 
        <h1 className="title"> {company.ticker} </h1>
          <div> 
            <MainChart key={company.ticker} data={stock[company.ticker]} />
          </div>
        </div>
        ) )     
      }
    </div>
    </div>
    )}

}





export default App;