import { StateCreator } from 'zustand'

interface SettingsState {
  settings: string
  setSettings: (settings: string) => void
}

const settingsSlice: StateCreator<SettingsState> = (set) => ({
  settings: '',
  setSettings: (settings) => set({ settings }),
})

export default settingsSlice
export type { SettingsState }
