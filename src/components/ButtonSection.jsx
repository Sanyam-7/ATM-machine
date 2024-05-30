import React from 'react';

const ButtonSection = ({ checkBalanceHandler }) => {
  return (
    <div className="button-section">
      <button onClick={checkBalanceHandler}>Check Balance</button>
    </div>
  );
};

export default ButtonSection;
