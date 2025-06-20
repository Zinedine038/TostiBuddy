import { create } from 'zustand';

export const useStorageStore = create((set) => ({
  bread: 0,
  cheese: 0,
  ham: 0,
  ketchup: 500,
  curry: 500,

  setField: (field, value) => set({ [field]: value }),

  resetStorage: () =>
    set({
      bread: 0,
      cheese: 0,
      ham: 0,
      ketchup: 500,
      curry: 500,
    }),
}));
