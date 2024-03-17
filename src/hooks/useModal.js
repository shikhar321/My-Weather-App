import { create } from "zustand";

const useModal = create((set) => ({
  state: undefined,
  isOpen: false,
  openModal: (state: string) => set({ isOpen: true, state }),
  closeModal: () => set({ isOpen: false, state: undefined }),
}));

export default useModal;
