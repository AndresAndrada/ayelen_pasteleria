import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UiStore {
    DarkMode: boolean;
    MenuOptionExercise: string;
    MenuOptionUsers: string;

    setDarkMode: (values: boolean) => void;
    setMenuOptionExercise: (values: string) => void;
    setMenuOptionUser: (values: string) => void;
}

export const useUiStore = create<UiStore>()(persist((set) => ({
    DarkMode: false,
    MenuOptionExercise: "todos",
    MenuOptionUsers: "todos",

    setDarkMode: (values: boolean) => set({ DarkMode: values }),
    setMenuOptionExercise: (values: string) => set({ MenuOptionExercise: values }),
    setMenuOptionUser: (values: string) => set({ MenuOptionUsers: values }),
}), {
    name: 'ui-storage',
    storage: {
        getItem: (name) => {
            const item = localStorage.getItem(name);
            return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
            localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => localStorage.removeItem(name),
    },
}));