import { classNames } from '@/utils/generics'
import React from 'react'

interface IProps {
  src?: string
  alt?: string
  className?: string
}

const Logo: React.FC<IProps> = ({
  src = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
  alt = 'Company-Logo',
  className,
}) => (
  <img
    src={src}
    alt={alt}
    className={classNames('h-8 w-auto', className ? className : '')}
  />
)

export default Logo
