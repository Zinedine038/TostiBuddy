import { create } from 'zustand';

export const useTostiStore = create((set) => ({
  tostiList: [
    {
      name: '',
      slider: 2,
      ham: true,
      ketchup: true,
      curry: true,
    },
  ],

  addTosti: () =>
    set((state) => ({
      tostiList: [
        ...state.tostiList,
        {
          name: '',
          slider: 2,
          ham: true,
          ketchup: true,
          curry: true,
        },
      ],
    })),

  removeTosti: (index) =>
    set((state) => {
      const updated = state.tostiList.filter((_, i) => i !== index);
      return { tostiList: updated };
    }),

  updateTosti: (index, field, value) =>
    set((state) => {
      const newList = [...state.tostiList];
      newList[index] = {
        ...newList[index],
        [field]: value,
      };
      return { tostiList: newList };
    }),
}));
