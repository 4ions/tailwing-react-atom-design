import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import InputFile, { IProps } from '../atoms/Form/InputFile'

// Mock Form Values Type
type FormData = {
  file: string
}

const meta: Meta<IProps> = {
  title: 'components/InputFile',
  component: InputFile,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }, // Add control for disabled
  },
}

export default meta

type Story = StoryObj<typeof InputFile>

export const Default: Story = {
  render: (args) => {
    const { register } = useForm<FormData>()

    return <InputFile {...args} register={register} name="file" />
  },
  args: {
    label: 'Upload File',
    placeholder: '',
    disabled: false,
  },
}

export const Disabled: Story = {
  render: (args) => {
    const { register } = useForm<FormData>()

    return <InputFile {...args} register={register} name="file" />
  },
  args: {
    label: 'Upload File',
    placeholder: '',
    disabled: true,
  },
}
