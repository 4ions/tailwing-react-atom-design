import * as yup from 'yup'

const requiredFieldMessage = 'This field is required'

export const schema = yup.object().shape({
  category: yup.object().shape({
    value: yup.string(),
    label: yup.string(),
  }),
  subcategory: yup.object().shape({
    value: yup.string(),
    label: yup.string(),
  }),
  commercialActivity: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string(),
        label: yup.string(),
      })
    ) // Ensure that each element is a string and required
    .required(requiredFieldMessage),
})
