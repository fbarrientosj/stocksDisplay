(this.webpackJsonpstockviewer=this.webpackJsonpstockviewer||[]).push([[0],{194:function(e,t,a){e.exports=a(407)},199:function(e,t,a){},227:function(e,t){},407:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(55),r=a.n(c),o=(a(199),a(14)),u=a(60),m=a(7),i=a(13),s=a(155),d=a.n(s),E=a(34);function v(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=(a[1],e.data);return c.length>0&&c[0].ticker,l.a.createElement("div",null,l.a.createElement(E.b,{width:500,height:300,data:r},l.a.createElement(E.d,{dataKey:"tima",label:{value:"tiempo"}}),l.a.createElement(E.e,{label:{value:"Precio",angle:90,position:"insideLeft"}}),l.a.createElement(E.c,null),l.a.createElement(E.a,{time:"monotone",dataKey:"value",stroke:"#999",activeDot:{r:8}})))}function b(e){var t=JSON.parse(e.data);t=Object.values(t);for(var a={},n=0,c=Object.entries(e.realData);n<c.length;n++){var r=Object(i.a)(c[n],2),o=r[0],u=(r[1],Math.min.apply(Math,e.realData[o].map((function(e){return e.value})))),m=Math.max.apply(Math,e.realData[o].map((function(e){return e.value}))),s=e.realData[o][e.realData[o].length-1].value,d=(s-e.realData[o][0].value)/e.realData[o][0].value;a[o]={},a[o].min=u,a[o].max=m,a[o].ultimo=s,a[o].variacion=d}return l.a.createElement("div",null,l.a.createElement("h3",null," Actualmente se muestra la informaci\xf3n de ",t.length," acciones"),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"table"},l.a.createElement("th",null," Ticker "),l.a.createElement("th",null," Volumen Transado  "),l.a.createElement("th",null," Alto Historico  "),l.a.createElement("th",null," Bajo Historico "),l.a.createElement("th",null," \xdaltimo Precio "),l.a.createElement("th",null," Variaci\xf3n Porcentual "),l.a.createElement("th",null," Volumen Compra "),l.a.createElement("th",null," Volumen Venta "))),l.a.createElement("thead",null,t.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null," ",e.ticker," "),l.a.createElement("td",null," ",Math.abs(e.volumenTransado)," "),l.a.createElement("td",null," ",a[e.ticker]?a[e.ticker].max:0," "),l.a.createElement("td",null," ",a[e.ticker]?a[e.ticker].min:0," "),l.a.createElement("td",null," ",a[e.ticker]?a[e.ticker].ultimo:0," "),l.a.createElement("td",null," ",a[e.ticker]?a[e.ticker].variacion:0," "),l.a.createElement("td",null," ",e.volumenCompra," "),l.a.createElement("td",null," ",e.volumenVenta," "))})))))}function h(e){var t=JSON.parse(e.data);t=Object.values(t);var a=e.exchangeData,n=[],c=0;return a.forEach((function(e){for(var a={volumenCompra:0,volumenVenta:0,volumenTotal:0,cantidadAcciones:e.listed_companies.length,participacion:0,name:e.name},l=0;l<t.length;l++)e.listed_companies.indexOf(t[l].companyName)>-1&&(a.volumenCompra+=Math.abs(t[l].volumenCompra),a.volumenVenta+=Math.abs(t[l].volumenVenta),a.volumenTotal+=Math.abs(t[l].volumenTransado),c+=Math.abs(t[l].volumenTransado));n.push(a)})),n.map((function(e){c+=e.cantidadAcciones})),l.a.createElement("div",null,l.a.createElement("h2",null,"Informaci\xf3n de mercados"),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"table"},l.a.createElement("th",null," Nombre de Exchange "),l.a.createElement("th",null," Volumen Transado  "),l.a.createElement("th",null," Volumen Compra  "),l.a.createElement("th",null," Volumen Venta "),l.a.createElement("th",null," Numero acciones "),l.a.createElement("th",null," Participacion Mercado "))),l.a.createElement("thead",null,n.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null," ",e.name," "),l.a.createElement("td",null," ",e.volumenTotal>=0?e.volumenTotal:-1*e.volumenTotal," "),l.a.createElement("td",null," ",e.volumenCompra," "),l.a.createElement("td",null," ",e.volumenVenta," "),l.a.createElement("td",null," ",e.cantidadAcciones," "),l.a.createElement("td",null," ",Math.abs(e.volumenTotal/c)," "))})))))}function O(e){var t=e.data;return t=Object.values(t),l.a.createElement("div",null,l.a.createElement("h1",null," Detalle est\xe1tico Bursatil "),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"table"},l.a.createElement("th",null," Nombre de la compa\xf1\xeda "),l.a.createElement("th",null," Ticker de la acci\xf3n  "),l.a.createElement("th",null," Pa\xeds de origen  "))),l.a.createElement("thead",null,t.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null," ",e.company_name," "),l.a.createElement("td",null," ",e.ticker," "),l.a.createElement("td",null," ",e.country," "))})))))}var f=d()("wss://le-18262636.bitzonte.com",{path:"/stocks"});var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),s=Object(i.a)(r,2),d=s[0],E=s[1],j=Object(n.useState)({}),p=Object(i.a)(j,2),k=p[0],g=p[1],T=Object(n.useState)([]),N=Object(i.a)(T,2),S=N[0],V=N[1];return Object(n.useEffect)((function(){f.emit("STOCKS",(function(){})),f.on("STOCKS",(function(e){for(var t=function(){var t=e[a];g((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(o.a)({},t.ticker,Object(m.a)(Object(m.a)({},e[t.ticker]||{}),{},{volumenTransado:0,altoHistorico:0,bajoHistorico:0,ultimoPrecio:0,variacionPorcentual:0,volumenCompra:0,volumenVenta:0,numeroAcciones:0,ticker:t.ticker,participacionMercado:0,companyName:t.company_name,pices:[]})))})),c((function(t){return[].concat(Object(u.a)(t),[e[a]])}))},a=0;a<e.length;a++)t()})),f.emit("EXCHANGES",(function(){})),f.on("EXCHANGES",(function(e){Object.values(e).map((function(e){e.stocks=[],V((function(t){return[].concat(Object(u.a)(t),[e])}))}))}))}),[]),l.a.createElement("div",null,l.a.createElement("h1",null," Bienvenido al visualizador de Acciones! "),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){f.disconnect()}}," Desconectar socket"),l.a.createElement("button",{onClick:function(){return f.connect(),f.on("UPDATE",(function(e){var t={time:e.time,value:e.value};E((function(a){return Object(m.a)(Object(m.a)({},a),{},Object(o.a)({},e.ticker,[].concat(Object(u.a)(a[e.ticker]||[]),[t])))}))})),f.on("BUY",(function(e){g((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(o.a)({},e.ticker,Object(m.a)(Object(m.a)({},t[e.ticker]),{},{volumenTransado:t[e.ticker].volumenTransado+e.volume})))})),g((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(o.a)({},e.ticker,Object(m.a)(Object(m.a)({},t[e.ticker]),{},{volumenCompra:t[e.ticker].volumenCompra+e.volume})))}))})),void f.on("SELL",(function(e){g((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(o.a)({},e.ticker,Object(m.a)(Object(m.a)({},t[e.ticker]),{},{volumenTransado:t[e.ticker].volumenTransado-e.volume})))})),g((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(o.a)({},e.ticker,Object(m.a)(Object(m.a)({},t[e.ticker]),{},{volumenVenta:t[e.ticker].volumenVenta+e.volume})))}))}))}}," conectar socket"),l.a.createElement("p",null,"Declaimer: Reconectar el socket demora aproximadamente 5 segundos :)")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement(b,{data:JSON.stringify(k),realData:d})),l.a.createElement("div",null,l.a.createElement(h,{data:JSON.stringify(k),exchangeData:S})),l.a.createElement("div",null,l.a.createElement(O,{data:a})),l.a.createElement("h2",null,"Gr\xe1ficos de variaci\xf3n de precio"),l.a.createElement("div",null,a.map((function(e){return l.a.createElement("div",{className:"chart"},l.a.createElement("h1",{className:"title"}," ",e.ticker," "),l.a.createElement("div",null,l.a.createElement(v,{key:e.ticker,data:d[e.ticker]})))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(406);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.b3351fd0.chunk.js.map