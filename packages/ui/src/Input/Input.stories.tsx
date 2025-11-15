import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Yeirin/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '입력 필드 레이블',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
      description: '입력 타입',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    error: {
      control: 'text',
      description: '오류 메시지',
    },
    helperText: {
      control: 'text',
      description: '도움말 텍스트',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '내용을 입력하세요',
  },
};

export const WithLabel: Story = {
  args: {
    label: '이메일',
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const WithHelperText: Story = {
  args: {
    label: '보호자 성함',
    placeholder: '홍길동',
    helperText: '아이의 보호자 성함을 입력해주세요',
  },
};

export const WithError: Story = {
  args: {
    label: '연락처',
    type: 'tel',
    error: '올바른 전화번호를 입력해주세요',
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화 상태',
    placeholder: '입력할 수 없습니다',
    disabled: true,
  },
};

export const DonationAmount: Story = {
  args: {
    label: '후원 금액',
    type: 'number',
    placeholder: '10,000',
    helperText: '소중한 마음에 감사드립니다',
  },
};
