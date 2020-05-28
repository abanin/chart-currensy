import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { OFFSET_DAYS } from '../../constants';
import getChartData from '../../helpers/getChartData';



export default function Chart({ dimensions, data }) {
  const chartData = getChartData(data);
  const innerWidth = dimensions.width;
  const innerHeight = dimensions.height;

  return (
    <LineChart
      minTickGap={1}
      data={chartData}
      width={innerWidth}
      height={innerHeight*0.8}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" domain={[0, OFFSET_DAYS]} />
      <YAxis domain={[70, 85]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="usd" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="eur" stroke="#82ca9d" />
    </LineChart>
  );
}