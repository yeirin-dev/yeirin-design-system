import type { Meta, StoryObj } from '@storybook/react';
import { ChevronButton } from './ChevronButton';

const meta = {
  title: 'Soul/Admin/ChevronButton',
  component: ChevronButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '열림/닫힘 상태',
    },
    size: {
      control: 'number',
      description: '아이콘 크기 (px)',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof ChevronButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    isOpen: false,
    ariaLabelOpen: '옵션 닫기',
    ariaLabelClose: '옵션 열기',
    size: 16,
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    ariaLabelOpen: '옵션 닫기',
    ariaLabelClose: '옵션 열기',
    size: 16,
  },
};

export const Large: Story = {
  args: {
    isOpen: false,
    size: 24,
  },
};

export const Disabled: Story = {
  args: {
    isOpen: false,
    size: 16,
    disabled: true,
  },
};
