const BASE_URL = 'https://api.exchangerate.host';

export const fetchCurrencies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/symbols`);
    const data = await response.json();
    return Object.keys(data.symbols);
  } catch (error) {
    throw new Error('Failed to fetch currencies');
  }
};

export const convertCurrency = async (from, to, amount) => {
  try {
    const response = await fetch(
      `${BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}`
    );
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error('Failed to convert currency');
  }
};
