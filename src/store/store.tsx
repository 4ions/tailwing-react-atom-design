import { create } from 'zustand'
import authSlice, { AuthState } from './slices/authSlice'
import settingsSlice, { SettingsState } from './slices/settingsSlice'

type AppState = AuthState & SettingsState

const useStore = create<AppState>((set, get, store) => ({
  ...authSlice(set, get, store),
  ...settingsSlice(set, get, store),
}))

export default useStore
export type { AppState }
