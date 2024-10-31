import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface IProps {
  label?: string
  placeholder?: string
  register: UseFormRegister<any>
  name: string
  disabled?: boolean // Added disabled prop
}

const InputText: FC<IProps> = ({
  label,
  placeholder,
  register,
  name,
  disabled = false,
}) => {
  return (
    <>
      <label className="block mb-2 text-left dark:text-black" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2 dark:text-black focus:outline-none"
        id={name}
        type="text"
        placeholder={placeholder}
        {...register(name)}
        disabled={disabled} // Apply disabled attribute
      />
    </>
  )
}

export default InputText
