import { create } from 'zustand';

export const useCurrencyStore = create((set) => ({
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  amount: 1,
  result: null,
  currencies: [],
  loading: false,
  error: null,

  setFromCurrency: (currency) => set({ fromCurrency: currency }),
  setToCurrency: (currency) => set({ toCurrency: currency }),
  setAmount: (value) => set({ amount: value }),

  setCurrencies: (currencies) => set({ currencies }),
  setResult: (result) => set({ result }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
