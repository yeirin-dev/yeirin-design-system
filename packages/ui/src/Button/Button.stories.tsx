import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Yeirin/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'warm', 'gentle', 'outline'],
      description: '버튼의 스타일 - 예이린 브랜드 컬러를 반영합니다',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: '후원하기',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: '프로그램 참여하기',
  },
};

export const Warm: Story = {
  args: {
    variant: 'warm',
    size: 'md',
    children: '사랑 나누기',
  },
};

export const Gentle: Story = {
  args: {
    variant: 'gentle',
    size: 'md',
    children: '자세히 보기',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: '더 알아보기',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: '문의하기',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: '지금 후원하기',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: '마감되었습니다',
    disabled: true,
  },
};
