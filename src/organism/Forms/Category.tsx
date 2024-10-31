import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '@/atoms/Button'
import InputText from '@/atoms/Form/InputText'
import { getAllCommercialActivity } from '@/services/CommercialActivity'
import { CommercialActivityBase } from '@/models/CommercialActivity'
import { useQuery } from '@tanstack/react-query'
import SelectInput from '@/atoms/Form/Select'

interface IPropsCategory {
  onClose: () => void
  mutation: any
}

interface IOption {
  value: string
  label: string
}

interface IFormValues {
  name: string
  commercialactivity: IOption
}

const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  commercialactivity: yup.object().shape({
    value: yup.string().required('El nombre es obligatorio'),
    label: yup.string().required('El nombre es obligatorio'),
  }),
})

const CategoryForm: FC<IPropsCategory> = ({ onClose, mutation }) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['getAllCommercialActivity', {}],
    queryFn: () => getAllCommercialActivity<CommercialActivityBase[]>({}),
    select: (data) =>
      data.map((item: any) => ({
        value: item.id,
        label: item.name,
      })),
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver<IFormValues>(schema),
  })

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    const payload = {
      name: data.name,
      commercial_activity_id: data.commercialactivity?.value,
    }
    mutation.mutate(payload, {
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
        <SelectInput
          label="Actividad Comercial"
          placeholder="Buscar"
          name="commercialactivity"
          options={isSuccess ? data : []}
          control={control}
        />
        {errors.commercialactivity?.message && (
          <span className="text-red-500 text-sm">
            {errors.commercialactivity?.message}
          </span>
        )}
      </div>
      <div className="my-4">
        <InputText
          label="Nombre"
          placeholder="Ejemplo Marketing"
          register={register}
          name="name"
        />
        {errors.name?.message && (
          <span className="text-red-500 text-sm">{errors.name?.message}</span>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="submit" name="Crear Categoría" />
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

export default CategoryForm
