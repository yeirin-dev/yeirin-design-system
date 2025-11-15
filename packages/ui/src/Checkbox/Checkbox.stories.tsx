import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: '체크 상태',
    },
    label: {
      control: 'text',
      description: '체크박스 라벨',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    label: '체크박스',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    label: '선택됨',
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    id: 'checkbox-label',
    label: '이용약관에 동의합니다',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    label: '비활성화',
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: 'checkbox-disabled-checked',
    label: '비활성화 (선택됨)',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    id: 'checkbox-no-label',
    checked: false,
  },
};
