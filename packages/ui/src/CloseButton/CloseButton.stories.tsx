import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './CloseButton';

const meta = {
  title: 'Soul/Admin/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '닫기 버튼의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'sm',
    onClose: () => console.log('Close clicked'),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    onClose: () => console.log('Close clicked'),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    onClose: () => console.log('Close clicked'),
  },
};

export const Disabled: Story = {
  args: {
    size: 'md',
    disabled: true,
    onClose: () => console.log('Close clicked'),
  },
};
