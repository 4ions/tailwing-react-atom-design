import { Meta, StoryObj } from '@storybook/react'
import { FieldValues, useForm } from 'react-hook-form'
import SelectInput, { IProps } from '../atoms/Form/Select'

const meta: Meta<IProps> = {
  title: 'components/Select',
  component: SelectInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isMulti: { control: 'boolean' },
    options: { control: 'object' },
  },
}

export default meta

type Story = StoryObj<typeof SelectInput>

export const Default: Story = {
  render: (args) => {
    const { control } = useForm<FieldValues>()

    return <SelectInput {...args} control={control} name="selectOption" />
  },
  args: {
    label: 'Select an Option',
    placeholder: 'Choose...',
    isMulti: false,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}

export const MultiSelect: Story = {
  render: (args) => {
    const { control } = useForm<FieldValues>()

    return <SelectInput {...args} control={control} name="selectOption" />
  },
  args: {
    label: 'Select Multiple Options',
    placeholder: 'Choose...',
    isMulti: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}
