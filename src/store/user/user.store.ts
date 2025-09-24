import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserType } from '../../types';

interface UserStore {
    Authenticated: boolean;
    DataPerfilUser: UserType[];
    User: UserType | null;
    Details: UserType | null;
    Login: boolean;

    setAuthenticated: (values: boolean) => void;
    setDataPerfilUser: (values: UserType[]) => void;
    setUser: (values: UserType) => void;
    setDetails: (values: UserType) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => (
      {
        Authenticated: true, 
        DataPerfilUser: [], 
        User: null, 
        Details: null,
        Login: false,

        setAuthenticated: (isAuthenticated) => set({ Authenticated: isAuthenticated }),
        setDataPerfilUser: (values) => set({ DataPerfilUser: values }),
        setUser: (values: UserType) => set({ User: values }),
        setDetails: (values: UserType) => set({ Details: values }),
      }
    ), {
    name: 'user-storage',
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