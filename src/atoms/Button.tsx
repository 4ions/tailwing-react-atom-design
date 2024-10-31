import { ReactNode } from 'react'

export interface IProps {
  name: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  backgroundColor?: string
  textColor?: string
  padding?: string
  margin?: string
  borderRadius?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  name,
  icon,
  iconPosition = 'left',
  backgroundColor = 'bg-blue-500',
  textColor = 'text-white',
  padding = 'px-5 py-2.5',
  margin = 'me-2 mb-2',
  borderRadius = 'rounded-lg',
  onClick,
  type = 'button',
  disabled = false,
}: IProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={name}
      className={`flex items-center justify-center font-medium text-sm focus:outline-none ${!disabled ? backgroundColor : 'bg-gray-300'} ${textColor} ${padding} ${margin} ${borderRadius} ${
        iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
      onClick={onClick}
    >
      {icon && (
        <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
          {icon}
        </span>
      )}
      <span>{name}</span>
    </button>
  )
}

export default Button
