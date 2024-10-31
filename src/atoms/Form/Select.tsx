import { FC } from 'react'
import { Controller, Control } from 'react-hook-form'
import Select, { SingleValue, MultiValue } from 'react-select'

interface IOption {
  value: string
  label: string
}

export interface IProps {
  label?: string
  placeholder?: string
  options: IOption[]
  name: string
  control: Control<any>
  isMulti?: boolean
}

const SelectInput: FC<IProps> = ({
  label,
  options,
  placeholder,
  name,
  control,
  isMulti = false,
}) => {
  return (
    <>
      <label className="block mb-2 text-left dark:text-black">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
            onChange={(selectedOption) =>
              field.onChange(
                isMulti
                  ? (selectedOption as MultiValue<IOption>)
                  : (selectedOption as SingleValue<IOption>)
              )
            }
            value={field.value}
          />
        )}
      />
    </>
  )
}

export default SelectInput
