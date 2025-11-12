import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: 'The visual style of the card',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <h3 style={{ marginTop: 0 }}>Card Title</h3>
        <p>This is a default card with some content inside.</p>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: (
      <>
        <h3 style={{ marginTop: 0 }}>Bordered Card</h3>
        <p>This card has a border around it.</p>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <h3 style={{ marginTop: 0 }}>Elevated Card</h3>
        <p>This card has a shadow for elevation.</p>
      </>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    variant: 'bordered',
    header: <h3 style={{ margin: 0 }}>Card Header</h3>,
    children: <p>This card has a dedicated header section.</p>,
  },
};

export const WithFooter: Story = {
  args: {
    variant: 'bordered',
    children: <p>This card has a footer with actions.</p>,
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Save
        </Button>
      </div>
    ),
  },
};

export const Complete: Story = {
  args: {
    variant: 'elevated',
    header: <h3 style={{ margin: 0 }}>Complete Card</h3>,
    children: (
      <>
        <p>This card demonstrates all three sections: header, body, and footer.</p>
        <p>You can put any content you want in the body section.</p>
      </>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '14px', color: '#6B7280' }}>Last updated: Today</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm">
            Continue
          </Button>
        </div>
      </div>
    ),
  },
};
