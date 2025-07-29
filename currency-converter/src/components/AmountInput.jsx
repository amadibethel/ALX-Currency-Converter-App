import React from 'react';

function AmountInput({ amount, onChange }) {
  return (
    <input
      type="number"
      min="0"
      step="any"
      value={amount}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter amount"
      className="border rounded p-2 w-full"
    />
  );
}

export default AmountInput;
