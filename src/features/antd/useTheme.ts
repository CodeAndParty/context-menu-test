import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const useTheme = create(
  persist<State>(
    (set, get) => ({
      isDarkMode: true,
      toggleTheme: () => set({ isDarkMode: !get().isDarkMode }),
    }),
    {
      name: 'theme',
    }
  )
);

export default useTheme;
