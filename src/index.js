import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Statistics from './components/Statistics/StatisticsSection/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import './base.css';

ReactDOM.render(
  <div>
    <App />
    <Statistics title="Upload stats" stats={statisticalData} />
  </div>,
  document.querySelector('#root'),
);
