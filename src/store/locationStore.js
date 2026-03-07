import { create } from 'zustand'

const useLocationStore = create((set) => ({
  division: "",
  district: "",
  setLocation: (division, district) => set({ division, district }),
}))

export default useLocationStore