import type { Meta, StoryObj } from '@storybook/react';
import { StatsCard } from './StatsCard';

const meta = {
  title: 'Yeirin/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warm', 'accent'],
      description: '카드 스타일',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '카드 크기',
    },
    trend: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
      description: '트렌드 방향',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TotalDonors: Story = {
  args: {
    label: '총 후원자',
    value: 1523,
    icon: '👥',
    change: 12.5,
    changeLabel: '지난 달 대비',
    variant: 'primary',
  },
};

export const MonthlyDonation: Story = {
  args: {
    label: '이번 달 후원 금액',
    value: '24,580,000원',
    icon: '💰',
    change: 8.3,
    changeLabel: '전월 대비',
    variant: 'warm',
    description: '목표: 30,000,000원',
  },
};

export const SupportedChildren: Story = {
  args: {
    label: '지원 아동 수',
    value: 387,
    icon: '❤️',
    change: 23,
    changeLabel: '올해 신규',
    variant: 'accent',
    description: '전국 15개 센터 운영 중',
  },
};

export const CompletedPrograms: Story = {
  args: {
    label: '완료된 프로그램',
    value: 156,
    icon: '✅',
    change: 15,
    changeLabel: '이번 분기',
    variant: 'success',
  },
};

export const WithNegativeTrend: Story = {
  args: {
    label: '대기 중인 신청',
    value: 28,
    icon: '⏳',
    change: -18,
    changeLabel: '지난 주 대비',
    trend: 'down',
    variant: 'primary',
    description: '빠른 처리 중',
  },
};

export const SmallSize: Story = {
  args: {
    label: '오늘 방문자',
    value: 1245,
    icon: '👀',
    size: 'sm',
    variant: 'primary',
  },
};

export const MediumSize: Story = {
  args: {
    label: '활성 후원자',
    value: 892,
    icon: '💝',
    change: 5.2,
    changeLabel: '이번 달',
    size: 'md',
    variant: 'warm',
  },
};

export const LargeSize: Story = {
  args: {
    label: '누적 후원 금액',
    value: '1.2억원',
    icon: '🏆',
    change: 18.5,
    changeLabel: '올해',
    size: 'lg',
    variant: 'success',
    description: '2024년 1월부터',
  },
};

export const ImpactDashboard: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
      }}
    >
      <StatsCard
        label="총 후원자"
        value={1523}
        icon="👥"
        change={12.5}
        changeLabel="지난 달 대비"
        variant="primary"
      />
      <StatsCard
        label="이번 달 후원"
        value="24,580,000원"
        icon="💰"
        change={8.3}
        changeLabel="전월 대비"
        variant="warm"
      />
      <StatsCard
        label="지원 아동"
        value={387}
        icon="❤️"
        change={23}
        changeLabel="올해 신규"
        variant="accent"
      />
      <StatsCard
        label="완료 프로그램"
        value={156}
        icon="✅"
        change={15}
        changeLabel="이번 분기"
        variant="success"
      />
    </div>
  ),
};

export const YearlyImpact: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <StatsCard
        label="2024년 총 후원 금액"
        value="2억 3,450만원"
        icon="💎"
        change={25.8}
        changeLabel="전년 대비"
        size="lg"
        variant="warm"
        description="목표: 3억원 (78% 달성)"
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <StatsCard label="지원 가정" value={234} icon="🏠" change={18} variant="primary" size="sm" />
        <StatsCard label="상담 횟수" value={1567} icon="💬" change={22} variant="success" size="sm" />
      </div>
    </div>
  ),
};

export const ProgramStats: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        maxWidth: '1000px',
      }}
    >
      <StatsCard
        label="심리상담"
        value={892}
        icon="💛"
        change={15}
        changeLabel="진행 중"
        variant="warm"
        description="월평균 298회"
      />
      <StatsCard
        label="교육지원"
        value={456}
        icon="📚"
        change={12}
        changeLabel="참여 아동"
        variant="primary"
        description="10개 프로그램 운영"
      />
      <StatsCard
        label="의료지원"
        value={234}
        icon="🏥"
        change={8}
        changeLabel="지원 건수"
        variant="accent"
        description="전문의 협력"
      />
      <StatsCard
        label="주거지원"
        value={67}
        icon="🏠"
        change={5}
        changeLabel="지원 가정"
        variant="success"
        description="임시 거처 제공"
      />
    </div>
  ),
};

export const MonthlyReport: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <h2 style={{ marginBottom: '24px', color: '#1F2937' }}>11월 활동 리포트</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <StatsCard
          label="신규 후원자"
          value={87}
          icon="🎉"
          change={34}
          changeLabel="전월 대비"
          variant="success"
        />
        <StatsCard label="후원 갱신률" value="94%" icon="📈" change={2.3} changeLabel="개선" variant="primary" />
        <StatsCard label="평균 후원액" value="32,450원" icon="💝" change={5.8} variant="warm" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <StatsCard
          label="프로그램 만족도"
          value="4.8 / 5.0"
          icon="⭐"
          change={0.3}
          changeLabel="향상"
          variant="success"
          description="참여자 설문 결과"
        />
        <StatsCard
          label="자원봉사자"
          value={156}
          icon="🤝"
          change={12}
          changeLabel="활동 중"
          variant="accent"
          description="월 평균 520시간"
        />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '700px' }}>
      <StatsCard label="Primary" value={1234} icon="📊" change={10} variant="primary" />
      <StatsCard label="Success" value={5678} icon="✅" change={15} variant="success" />
      <StatsCard label="Warm" value={9012} icon="💛" change={20} variant="warm" />
      <StatsCard label="Accent" value={3456} icon="❤️" change={8} variant="accent" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <StatsCard label="Small" value={100} icon="📊" size="sm" variant="primary" />
      <StatsCard label="Medium" value={1000} icon="📊" change={10} size="md" variant="warm" />
      <StatsCard
        label="Large"
        value={10000}
        icon="📊"
        change={20}
        changeLabel="이번 달"
        size="lg"
        variant="success"
        description="월별 통계"
      />
    </div>
  ),
};
