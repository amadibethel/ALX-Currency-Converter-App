import React from 'react';

function CurrencySelector({ currencies, selectedCurrency, onChange }) {
  return (
    <select
      value={selectedCurrency}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2"
    >
      <option value="" disabled>
        Select currency
      </option>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelector;
