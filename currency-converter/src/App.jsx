import React from "react";
import ConverterForm from "./components/ConverterForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">Currency Converter</h1>
      <ConverterForm />
    </div>
  );
}

export default App;
