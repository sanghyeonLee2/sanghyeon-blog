// stores/useUserStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { User } from '@/types/user';

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  immer((set) => ({
    user: null,
    setUser: (user) =>
      set((state) => {
        state.user = user;
      }),
    clearUser: () =>
      set((state) => {
        state.user = null;
      }),
  })),
);
