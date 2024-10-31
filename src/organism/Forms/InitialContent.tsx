import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@/atoms/Button'
import { schema } from '@/schemas/initialContent'
import SelectInput from '@/atoms/Form/Select'
import { useIntialFormStore } from '@/store/initialFormState'

interface IPropsInitialContent {}

interface IFormValues {
  category: object
  subcategory: object
  commercialActivity: object[]
}

const InitialContentForm: FC<IPropsInitialContent> = () => {
  // Global state
  const { category, subcategory, commercialActivity, updateForm } =
    useIntialFormStore()

  console.log(
    '🚀 ~ category, subcategory, commercialActivity:',
    category,
    subcategory,
    commercialActivity
  )

  const {
    control,
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      category: category,
      subcategory: subcategory,
      commercialActivity: commercialActivity,
    },
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    updateForm(data)
    console.log('Estado actualizado:', useIntialFormStore.getState())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="my-4">
        <SelectInput
          label="Categoria"
          placeholder="Buscar"
          name="category"
          options={[
            {
              value: '1',
              label: 'test',
            },
          ]}
          control={control}
        />
        {errors.category?.message && (
          <span className="text-red-500 text-sm">
            {errors.category?.message}
          </span>
        )}
      </div>
      <div className="my-4">
        <SelectInput
          label="Subcategoria"
          placeholder="Buscar"
          name="subcategory"
          options={[
            {
              value: '1',
              label: 'test',
            },
          ]}
          control={control}
        />
        {errors.subcategory?.message && (
          <span className="text-red-500 text-sm">
            {errors.subcategory?.message}
          </span>
        )}
      </div>

      <div className="my-4">
        <SelectInput
          label="Actividad Comercial"
          placeholder="Buscar"
          name="commercialActivity"
          options={[
            {
              value: '1',
              label: 'test',
            },
            {
              value: '2',
              label: 'test2',
            },
          ]}
          control={control}
          isMulti
        />
        {errors.commercialActivity?.message && (
          <span className="text-red-500 text-sm">
            {errors.commercialActivity?.message}
          </span>
        )}
      </div>

      <div className="my-4">
        <Button type="submit" name="Siguiente" />
      </div>
    </form>
  )
}

export default InitialContentForm
