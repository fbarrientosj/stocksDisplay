import React from 'react';
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';



export default function MainChart(props) {
  const [dataUpdate, setDataUpdate] = useState([]);

  
  const data = props.data;

 var ticker = 'NaN'
  if (dataUpdate.length > 0){
    ticker = dataUpdate[0].ticker
  }
  // 2. render the line chart using the state
  return (
    <div>
      <LineChart width={450} height={300} data={data}>
        <XAxis dataKey="time"  stroke="#7c795d" label={{ value:"Tiempo", maeginTop:"100px" , position:"insideBottom" }}/>
        <YAxis  stroke="#7c795d" label={{ value:"Valor", angle: -90 }}/>
        <Tooltip/>
        <CartesianGrid  stroke="#7c795d " strokeDasharray="5 5"/>
        <Line time="monotone" dataKey="value" stroke="#4CAF50" activeDot={{r: 8}} />
      </LineChart>

    </div>
  );
};