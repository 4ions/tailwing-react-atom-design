import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '@/atoms/Button'
import InputText from '@/atoms/Form/InputText'

interface IPropsCurrency {
  onClose: () => void
  mutation: any
}

interface IFormValues {
  name: string
}

const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
})

const CurrencyForm: FC<IPropsCurrency> = ({ onClose, mutation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    mutation.mutate(data, {
      onSuccess: (response: any) => {
        onClose()
        console.log('Successfully:', response)
      },
      onError: (error: any) => {
        console.error('Error:', error)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="my-4">
        <InputText
          label="Nombre"
          placeholder="Ejemplo MXN"
          register={register}
          name="name"
        />
        {errors.name?.message && (
          <span className="text-red-500 text-sm">{errors.name?.message}</span>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="submit" name="Crear moneda" />
        <Button
          type="button"
          backgroundColor="bg-red-700"
          name="Salir"
          onClick={onClose}
        />
      </div>
    </form>
  )
}

export default CurrencyForm
