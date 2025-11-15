import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: '현재 페이지',
    },
    totalPages: {
      control: 'number',
      description: '전체 페이지 수',
    },
    maxVisiblePages: {
      control: 'number',
      description: '최대 표시 페이지 수',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to manage state
const PaginationWrapper = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  return (
    <div>
      <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />
      <div style={{ marginTop: '2rem', textAlign: 'center', color: '#666' }}>
        현재 페이지: {currentPage}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    maxVisiblePages: 5,
  },
};

export const FewPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 2,
    totalPages: 5,
    maxVisiblePages: 5,
  },
};

export const ManyPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 15,
    totalPages: 50,
    maxVisiblePages: 5,
  },
};

export const FirstPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 20,
    maxVisiblePages: 5,
  },
};

export const LastPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 20,
    totalPages: 20,
    maxVisiblePages: 5,
  },
};

export const MiddlePage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 10,
    totalPages: 20,
    maxVisiblePages: 5,
  },
};
