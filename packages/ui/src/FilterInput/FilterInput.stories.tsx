import type { Meta, StoryObj } from '@storybook/react';
import { FilterInput } from './FilterInput';

const meta = {
  title: 'Soul/FilterInput',
  component: FilterInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    error: {
      control: 'boolean',
      description: '에러 상태 여부',
    },
    disabled: {
      control: 'boolean',
      description: '입력 비활성화 여부',
    },
  },
} satisfies Meta<typeof FilterInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { id: 1, name: '서울특별시' },
  { id: 2, name: '부산광역시' },
  { id: 3, name: '대구광역시' },
  { id: 4, name: '인천광역시' },
  { id: 5, name: '광주광역시' },
  { id: 6, name: '대전광역시' },
  { id: 7, name: '울산광역시' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: '검색어 입력',
    onSelect: (option) => console.log('Selected:', option),
  },
};

export const WithError: Story = {
  args: {
    options: sampleOptions,
    placeholder: '검색어 입력',
    error: true,
    onSelect: (option) => console.log('Selected:', option),
  },
};

export const WithSelectedValue: Story = {
  args: {
    options: sampleOptions,
    selectedId: 1,
    value: '서울특별시',
    placeholder: '검색어 입력',
    onSelect: (option) => console.log('Selected:', option),
  },
};

export const WithAddNew: Story = {
  args: {
    options: sampleOptions,
    placeholder: '검색어 입력',
    onSelect: (option) => console.log('Selected:', option),
    onAddNew: (name) => console.log('Add new:', name),
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    placeholder: '검색어 입력',
    disabled: true,
  },
};
