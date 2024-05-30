import React from 'react';

const TransactionHistory = ({ transactionHistory }) => {
  return (
    <>
      <h3>Transaction History</h3>
      <ul className="transaction-history">
        {transactionHistory.map((transaction) => (
          <li key={transaction.id}>
            {transaction.timestamp} - {transaction.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionHistory;
