import { create } from 'zustand'

type InitialFormStore = {
  category: object
  subcategory: object
  commercialActivity: object[]
  updateForm: (fields: Partial<InitialFormStore>) => void
}

export const useIntialFormStore = create<InitialFormStore>()((set) => ({
  category: {
    value: '',
    label: '',
  },
  subcategory: {
    value: '',
    label: '',
  },
  commercialActivity: [
    {
      value: '',
      label: '',
    },
  ],
  updateForm: (fields: Partial<InitialFormStore>) =>
    set((state: InitialFormStore) => ({ ...state, ...fields })),
}))
