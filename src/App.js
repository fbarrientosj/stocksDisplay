import io from 'socket.io-client';
import React from 'react';
import { useEffect, useState } from 'react';



import MainChart from './components/MainChart';
import StockStats from './components/StockStats';
import Exchange from './components/Exchange';
import InfoStock from './components/InfoStock';

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
    socket.connect()
    socket.on('UPDATE', current => {

      var data = {
        time: new Date(current.time).toISOString().substr(11,5),
        value: current.value
      }
      setstock(state => ({...state, [current.ticker]: [...(state[current.ticker] || []), data]}));
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
      'participacionMercado' : 0,
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
    })
  
    const sleep = ms => new Promise(res => setTimeout(res, ms));

    (async () => {
      console.log('1');
      await sleep(500);
      console.log('2');
      await sleep(1900);
      startSocket();
    })();
  
  
}, [])
  var graph = false; 
  
    return(
      
    <div>
      
      <br></br>
      <br></br>
      <h1> Bienvenido al visualizador de Acciones! </h1>
      <br></br>
      <hr></hr>
      <div>
      <button onClick={() => disconnectSocket()}> Desconectar socket</button>
      <button onClick={() => startSocket()}> conectar socket</button>
      <br></br>
      </div>
      <hr></hr>
      <div>
        <StockStats data={JSON.stringify(stats)} realData={stock}/>
      </div>
      <div>
        <Exchange data={JSON.stringify(stats)} exchangeData={exchange}/>
      </div>
      <div>
        <InfoStock data={stockCompanies}/>
      </div>
      <br></br>
      <hr></hr>
      <h1>Gráficos de variación de precio</h1>
      <br></br>
      <hr></hr>
      <div>
      {stockCompanies.map((company) => (
        <div className="chart"> 
        <h3 className="title"> {company.ticker} </h3>
          <div> 
            <MainChart key={company.ticker} data={stock[company.ticker]} />
            <br></br>
            <hr></hr>
          </div>
        </div>
        
        ) )     
      }
      
    </div>
    </div>
    )

}





export default App;