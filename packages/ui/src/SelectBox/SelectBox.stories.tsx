import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SelectBox, SelectOption } from './SelectBox';

const meta = {
  title: 'Components/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '크기',
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더',
    },
  },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions: SelectOption[] = [
  { id: 1, name: '전체', value: 'all' },
  { id: 2, name: '승인', value: 'approved' },
  { id: 3, name: '대기', value: 'pending' },
  { id: 4, name: '거절', value: 'rejected' },
];

const categoryOptions: SelectOption[] = [
  { id: 1, name: '카테고리 1', value: 'category1' },
  { id: 2, name: '카테고리 2', value: 'category2' },
  { id: 3, name: '카테고리 3', value: 'category3' },
  { id: 4, name: '카테고리 4', value: 'category4' },
  { id: 5, name: '카테고리 5', value: 'category5' },
];

// Wrapper component to manage state
const SelectBoxWrapper = (args: any) => {
  const [selectedValue, setSelectedValue] = useState<SelectOption | undefined>(args.value);

  return (
    <div>
      <SelectBox
        {...args}
        value={selectedValue}
        onChange={(option) => setSelectedValue(option || undefined)}
      />
      <div style={{ marginTop: '2rem', color: '#666' }}>
        선택된 값: {selectedValue ? selectedValue.name : '없음'}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: sampleOptions,
    placeholder: '선택하세요',
    size: 'md',
  },
};

export const Small: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: sampleOptions,
    placeholder: '선택',
    size: 'sm',
  },
};

export const Medium: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: sampleOptions,
    placeholder: '선택하세요',
    size: 'md',
  },
};

export const Large: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: categoryOptions,
    placeholder: '카테고리 선택',
    size: 'lg',
  },
};

export const WithDefaultValue: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: sampleOptions,
    value: sampleOptions[1], // '승인' 선택됨
    size: 'md',
  },
};

export const ErrorState: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: sampleOptions,
    placeholder: '필수 선택',
    error: true,
    size: 'md',
  },
};

export const Disabled: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: sampleOptions,
    placeholder: '선택 불가',
    disabled: true,
    size: 'md',
  },
};

export const ManyOptions: Story = {
  render: (args) => <SelectBoxWrapper {...args} />,
  args: {
    options: [
      ...sampleOptions,
      { id: 5, name: '옵션 5', value: 'option5' },
      { id: 6, name: '옵션 6', value: 'option6' },
      { id: 7, name: '옵션 7', value: 'option7' },
      { id: 8, name: '옵션 8', value: 'option8' },
    ],
    placeholder: '많은 옵션',
    size: 'md',
  },
};
