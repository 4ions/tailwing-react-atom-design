import React from 'react'

export interface IProps {
  content: string
  className: string
}

const Text: React.FC<IProps> = ({ content, className }) => {
  return <p className={className}>{content}</p>
}

export default Text
