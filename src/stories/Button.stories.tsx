import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button, { IProps } from '../atoms/Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<IProps> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: [
        'bg-blue-500',
        'bg-red-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-gray-500',
      ],
      defaultValue: 'bg-blue-500',
    },
    textColor: {
      control: 'select',
      options: [
        'text-white',
        'text-dark',
        'bg-blue-500',
        'text-red-500',
        'text-green-500',
        'text-yellow-500',
        'text-gray-500',
      ],
      defaultValue: 'text-white',
    },
    iconPosition: { control: 'text', options: ['left', 'right'] },
    padding: { control: 'text' },
    margin: { control: 'text' },
    borderRadius: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Default Button',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-white',
    padding: 'px-5 py-2.5',
    margin: 'me-2 mb-2',
    borderRadius: 'rounded-lg',
    onClick: () => alert('Button clicked!'),
  },
}
