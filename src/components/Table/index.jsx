import React from 'react';
import classes from './styles.module.scss';
import getChartData from '../../helpers/getChartData';


export default function Table({ data }) {
  function renderRow(rowData = []) {
    return rowData.map(item => (
      <tr key={item.date}>
        <td>{item.date}</td>
        <td>{item.dateApi}</td>
        <td>{item.eur}</td>
        <td>{item.usd}</td>
      </tr>
      )
    );
  }

  
  return (
    <table className={classes.wrap}>
      <thead>
        <tr>
          <th>Date request</th>
          <th>Date response</th>
          <th>EUR</th>
          <th>USD</th>
        </tr>
      </thead>
      <tbody>
        {renderRow(getChartData(data))}
      </tbody>
    </table>
  )
}