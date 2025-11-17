import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';

const meta = {
  title: 'Soul/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: '검색 입력의 크기',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '입력 비활성화 여부',
    },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    placeholder: '검색어 입력',
    onSearch: (value) => console.log('Search:', value),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: '검색어를 입력하세요',
    onSearch: (value) => console.log('Search:', value),
  },
};

export const Disabled: Story = {
  args: {
    size: 'md',
    placeholder: '검색어 입력',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    size: 'md',
    value: '예이린',
    placeholder: '검색어 입력',
    onSearch: (value) => console.log('Search:', value),
  },
};
