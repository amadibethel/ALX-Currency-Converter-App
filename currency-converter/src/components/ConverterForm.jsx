import React, { useState } from "react";
import CurrencySelector from "./CurrencySelector";
import AmountInput from "./AmountInput";

function ConverterForm() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
      );
      const data = await response.json();

      if (data.result) {
        setConvertedAmount(data.result.toFixed(2));
      } else {
        setError("Conversion failed. Please try again.");
      }
    } catch (err) {
      setError("Error fetching conversion data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded shadow">
      <div>
        <label className="block mb-1 font-semibold">From:</label>
        <CurrencySelector value={fromCurrency} onChange={setFromCurrency} />
      </div>

      <div>
        <label className="block mb-1 font-semibold">To:</label>
        <CurrencySelector value={toCurrency} onChange={setToCurrency} />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Amount:</label>
        <AmountInput amount={amount} onChange={setAmount} />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Converting..." : "Convert"}
      </button>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {convertedAmount !== null && (
        <p className="text-center text-green-600 font-semibold">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </p>
      )}
    </form>
  );
}

export default ConverterForm;
