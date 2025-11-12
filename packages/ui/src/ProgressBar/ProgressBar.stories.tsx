import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Yeirin/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '현재 값',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '프로그레스 바 크기',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warm', 'gradient'],
      description: '컬러 스타일',
    },
    animated: {
      control: 'boolean',
      description: '애니메이션 효과',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 65,
    label: '목표 달성률',
    showPercentage: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 7500000,
    max: 10000000,
    label: '후원 금액',
    showValue: true,
    showPercentage: true,
  },
};

export const Small: Story = {
  args: {
    value: 45,
    size: 'sm',
    label: '소규모 프로젝트',
    showPercentage: true,
  },
};

export const Medium: Story = {
  args: {
    value: 78,
    size: 'md',
    label: '중규모 프로젝트',
    showPercentage: true,
  },
};

export const Large: Story = {
  args: {
    value: 92,
    size: 'lg',
    label: '대규모 프로젝트',
    showPercentage: true,
  },
};

export const Primary: Story = {
  args: {
    value: 60,
    variant: 'primary',
    label: '일반 후원',
    showPercentage: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: '목표 달성!',
    showPercentage: true,
  },
};

export const Warm: Story = {
  args: {
    value: 85,
    variant: 'warm',
    label: '긴급 후원',
    showPercentage: true,
  },
};

export const Gradient: Story = {
  args: {
    value: 72,
    variant: 'gradient',
    label: '특별 캠페인',
    showPercentage: true,
    size: 'lg',
  },
};

export const Animated: Story = {
  args: {
    value: 68,
    label: '실시간 후원 현황',
    showPercentage: true,
    animated: true,
    variant: 'gradient',
    size: 'lg',
  },
};

export const LowProgress: Story = {
  args: {
    value: 15,
    label: '시작 단계',
    showPercentage: true,
    variant: 'primary',
  },
};

export const HighProgress: Story = {
  args: {
    value: 95,
    label: '거의 달성',
    showPercentage: true,
    variant: 'success',
    animated: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    value: 55,
    showPercentage: false,
  },
};

export const DonationGoals: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <ProgressBar
        value={8500000}
        max={10000000}
        label="긴급 의료비 지원"
        showValue={true}
        showPercentage={true}
        variant="warm"
        size="lg"
        animated={true}
      />
      <ProgressBar
        value={4200000}
        max={5000000}
        label="교육 장학금"
        showValue={true}
        showPercentage={true}
        variant="primary"
        size="md"
      />
      <ProgressBar
        value={2800000}
        max={3000000}
        label="겨울 방한용품"
        showValue={true}
        showPercentage={true}
        variant="success"
        size="md"
      />
      <ProgressBar
        value={1500000}
        max={10000000}
        label="새 학기 준비물"
        showValue={true}
        showPercentage={true}
        variant="primary"
        size="md"
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ProgressBar value={75} label="Small (sm)" showPercentage={true} size="sm" />
      <ProgressBar value={75} label="Medium (md)" showPercentage={true} size="md" />
      <ProgressBar value={75} label="Large (lg)" showPercentage={true} size="lg" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ProgressBar value={65} label="Primary" showPercentage={true} variant="primary" size="lg" />
      <ProgressBar value={100} label="Success" showPercentage={true} variant="success" size="lg" />
      <ProgressBar value={85} label="Warm" showPercentage={true} variant="warm" size="lg" />
      <ProgressBar
        value={72}
        label="Gradient"
        showPercentage={true}
        variant="gradient"
        size="lg"
        animated={true}
      />
    </div>
  ),
};

export const RealTimeExample: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(45);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(interval);
    }, []);

    return (
      <ProgressBar
        value={progress}
        label="실시간 후원 현황 (자동 업데이트)"
        showPercentage={true}
        variant="gradient"
        size="lg"
        animated={true}
      />
    );
  },
};
