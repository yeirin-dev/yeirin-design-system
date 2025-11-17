import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta = {
  title: 'Soul/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'active'],
      description: '아이콘 버튼의 상태',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '아이콘 버튼의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Default: Story = {
  args: {
    icon: <HeartIcon />,
    label: '좋아요',
    variant: 'default',
    size: 'md',
  },
};

export const Active: Story = {
  args: {
    icon: <HeartIcon />,
    label: '좋아요',
    variant: 'active',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    icon: <HeartIcon />,
    label: '공유',
    variant: 'default',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: <HeartIcon />,
    label: '좋아요',
    variant: 'default',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    icon: <HeartIcon />,
    label: '좋아요',
    variant: 'default',
    size: 'md',
    disabled: true,
  },
};
