import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from './Stepper';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: '현재 값',
    },
    min: {
      control: 'number',
      description: '최소값',
    },
    max: {
      control: 'number',
      description: '최대값',
    },
    step: {
      control: 'number',
      description: '증감 단위',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to manage state
const StepperWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || 0);

  return (
    <div>
      <Stepper {...args} value={value} onChange={setValue} />
      <div style={{ marginTop: '2rem', textAlign: 'center', color: '#666' }}>
        현재 값: {value}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const WithInitialValue: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 5,
    min: 0,
    max: 20,
    step: 1,
  },
};

export const WithRange: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 10,
    min: 5,
    max: 15,
    step: 1,
  },
};

export const WithLargeStep: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 0,
    min: 0,
    max: 100,
    step: 10,
  },
};

export const AtMinimum: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
};

export const AtMaximum: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 10,
    min: 0,
    max: 10,
    step: 1,
  },
};

export const Disabled: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 5,
    min: 0,
    max: 10,
    step: 1,
    disabled: true,
  },
};

export const SmallRange: Story = {
  render: (args) => <StepperWrapper {...args} />,
  args: {
    value: 2,
    min: 1,
    max: 5,
    step: 1,
  },
};
