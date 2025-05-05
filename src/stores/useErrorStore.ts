// stores/useErrorStore.ts
import { create } from 'zustand';

type ErrorState = {
  error: Error | null;
  setError: (error: Error) => void;
  clearError: () => void;
};

export const useErrorStore = create<ErrorState>((set) => ({
  error: null,
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));
