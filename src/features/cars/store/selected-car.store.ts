import { create } from 'zustand'

interface SelectedCarStoreState {
  selectedCarId: string | null
  selectCar: (id: string | null) => void
}

export const useSelectedCarStore = create<SelectedCarStoreState>((set) => ({
  selectedCarId: null,
  selectCar: (id: string | null) => set({ selectedCarId: id }),
}))
