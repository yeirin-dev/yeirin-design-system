import type { Meta, StoryObj } from '@storybook/react';
import { AdminButton } from './AdminButton';

const meta = {
  title: 'Soul/Admin/AdminButton',
  component: AdminButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'gray', 'delete'],
      description: '버튼의 스타일',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: '버튼의 크기',
    },
    isLoading: {
      control: 'boolean',
      description: '로딩 상태 여부',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 사용 여부',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof AdminButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: '저장',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: '취소',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    size: 'md',
    children: '비활성',
  },
};

export const Delete: Story = {
  args: {
    variant: 'delete',
    size: 'md',
    children: '삭제',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: '확인',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    fullWidth: true,
    children: '전체 저장',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: true,
    children: '저장 중',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: '저장',
  },
};
