import type { Meta, StoryObj } from '@storybook/react';
import { AdminInput } from './AdminInput';

const meta = {
  title: 'Soul/Admin/AdminInput',
  component: AdminInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'password'],
      description: '입력 타입',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: '입력의 크기',
    },
    width: {
      control: 'select',
      options: ['sm', 'md', 'full'],
      description: '입력의 너비',
    },
    error: {
      control: 'boolean',
      description: '에러 상태 여부',
    },
    readOnly: {
      control: 'boolean',
      description: '읽기 전용 여부',
    },
    disabled: {
      control: 'boolean',
      description: '입력 비활성화 여부',
    },
  },
} satisfies Meta<typeof AdminInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'admin-input-1',
    type: 'text',
    placeholder: '이름을 입력하세요',
    size: 'md',
    width: 'full',
  },
};

export const Large: Story = {
  args: {
    id: 'admin-input-2',
    type: 'text',
    placeholder: '큰 입력 필드',
    size: 'lg',
    width: 'full',
  },
};

export const Password: Story = {
  args: {
    id: 'admin-input-3',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    size: 'md',
    width: 'full',
  },
};

export const Number: Story = {
  args: {
    id: 'admin-input-4',
    type: 'number',
    placeholder: '숫자를 입력하세요',
    size: 'md',
    width: 'full',
  },
};

export const SmallWidth: Story = {
  args: {
    id: 'admin-input-5',
    type: 'text',
    placeholder: '입력',
    size: 'md',
    width: 'sm',
  },
};

export const MediumWidth: Story = {
  args: {
    id: 'admin-input-6',
    type: 'text',
    placeholder: '입력',
    size: 'md',
    width: 'md',
  },
};

export const WithError: Story = {
  args: {
    id: 'admin-input-7',
    type: 'text',
    placeholder: '이름을 입력하세요',
    size: 'md',
    width: 'full',
    error: true,
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'admin-input-8',
    type: 'text',
    placeholder: '읽기 전용',
    value: '수정할 수 없습니다',
    size: 'md',
    width: 'full',
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'admin-input-9',
    type: 'text',
    placeholder: '비활성화됨',
    size: 'md',
    width: 'full',
    disabled: true,
  },
};
