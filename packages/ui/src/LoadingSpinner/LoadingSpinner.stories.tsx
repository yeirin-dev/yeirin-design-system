import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta = {
  title: 'Soul/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '로딩 스피너의 크기',
    },
    content: {
      control: 'text',
      description: '로딩 중 표시할 텍스트',
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const WithText: Story = {
  args: {
    size: 'md',
    content: '로딩 중...',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    content: '처리 중',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    content: '데이터를 불러오는 중입니다',
  },
};
