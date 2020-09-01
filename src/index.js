import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Statistics from './components/Statistics/StatisticsSection/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import './base.css';

ReactDOM.render(
  <div>
    <App />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>,
  document.querySelector('#root'),
);
