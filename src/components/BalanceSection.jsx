import React from 'react';

const BalanceSection = ({ showBalance, balance }) => {
  return showBalance ? (
    <div className="balance-section">
      <h2>Balance: ${balance}</h2>
    </div>
  ) : null;
};

export default BalanceSection;
