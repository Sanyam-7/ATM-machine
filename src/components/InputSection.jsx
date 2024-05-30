import React from 'react';

const InputSection = ({
  addAmount,
  handleAddAmountChange,
  withdrawAmount,
  handleWithdrawAmountChange,
  addAmountHandler,
  withdrawAmountHandler,
}) => {
  return (
    <>
      <div className="input-section">
        <input
          type="text"
          value={addAmount}
          onChange={handleAddAmountChange}
          placeholder="Add amount"
        />
        <button onClick={addAmountHandler}>Add</button>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={withdrawAmount}
          onChange={handleWithdrawAmountChange}
          placeholder="Withdraw amount"
        />
        <button onClick={withdrawAmountHandler}>Withdraw</button>
      </div>
    </>
  );
};

export default InputSection;
