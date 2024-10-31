import useStore, { AppState } from '@/store/store'

const useAppStore = (sliceName: keyof AppState) => {
  const store = useStore()

  switch (sliceName) {
    case 'auth':
      return {
        auth: store.auth,
        setAuth: store.setAuth,
      }
    case 'settings':
      return {
        settings: store.settings,
        setSettings: store.setSettings,
      }
    default:
      throw new Error(`Slice ${sliceName} no existe en el store.`)
  }
}

export default useAppStore
