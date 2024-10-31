import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import InputText, { IProps } from '../atoms/Form/InputText'

// Mock Form Values Type
type FormData = {
  firstName: string
}

const meta: Meta<IProps> = {
  title: 'components/InputText',
  component: InputText,
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

type Story = StoryObj<typeof InputText>

export const Default: Story = {
  render: (args) => {
    const { register } = useForm<FormData>()

    return <InputText {...args} register={register} name="firstName" />
  },
  args: {
    label: 'First Name',
    placeholder: '',
    disabled: false,
  },
}

export const Disabled: Story = {
  render: (args) => {
    const { register } = useForm<FormData>()

    return <InputText {...args} register={register} name="firstName" />
  },
  args: {
    label: 'First Name',
    placeholder: '',
    disabled: true,
  },
}
