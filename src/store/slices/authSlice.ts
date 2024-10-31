import { StateCreator } from 'zustand'

interface AuthState {
  auth: string | null
  setAuth: (auth: string) => void
}

const authSlice: StateCreator<AuthState> = (set) => ({
  auth: null,
  setAuth: (auth) => set({ auth }),
})

export default authSlice
export type { AuthState }
