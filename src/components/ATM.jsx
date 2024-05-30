import React, { useState } from 'react';
import BalanceSection from './BalanceSection';
import InputSection from './InputSection';
import ButtonSection from './ButtonSection';
import TransactionHistory from './TransactionHistory';

const ATMContainer = () => {
  const [balance, setBalance] = useState(1000);
  const [addAmount, setAddAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showBalance, setShowBalance] = useState(false);

  const handleAddAmountChange = (e) => {
    setAddAmount(e.target.value);
  };

  const handleWithdrawAmountChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  const addAmountHandler = () => {
    const newAmount = parseInt(addAmount, 10);
    if (newAmount <= 0 || isNaN(newAmount)) {
      alert('Invalid amount');
      return;
    }
    setBalance(balance + newAmount);
    setAddAmount('');
    addTransaction(`Added $${newAmount}`);
    alert('Amount added successfully');
  };

  const withdrawAmountHandler = () => {
    const newAmount = parseInt(withdrawAmount, 10);
    if (newAmount <= 0 || isNaN(newAmount) || newAmount > balance) {
      alert('Invalid amount');
      return;
    }
    setBalance(balance - newAmount);
    setWithdrawAmount('');
    addTransaction(`Withdrawn $${newAmount}`);
    alert('Amount withdrawn successfully');
  };

  const checkBalanceHandler = () => {
    setShowBalance(true);
  };

  const addTransaction = (description) => {
    const newTransaction = {
      id: transactionHistory.length + 1,
      description: description,
      amount: description.includes('Added') ? '+' : '-',
      timestamp: new Date().toLocaleString(),
    };
    setTransactionHistory([...transactionHistory, newTransaction]);
  };

  return (
    <div className="atm-container">
      <h1>ATM Machine</h1>

      <BalanceSection showBalance={showBalance} balance={balance} />

      <InputSection
        addAmount={addAmount}
        handleAddAmountChange={handleAddAmountChange}
        withdrawAmount={withdrawAmount}
        handleWithdrawAmountChange={handleWithdrawAmountChange}
        addAmountHandler={addAmountHandler}
        withdrawAmountHandler={withdrawAmountHandler}
      />

      <ButtonSection checkBalanceHandler={checkBalanceHandler} />

      <TransactionHistory transactionHistory={transactionHistory} />
    </div>
  );
};

export default ATMContainer;
