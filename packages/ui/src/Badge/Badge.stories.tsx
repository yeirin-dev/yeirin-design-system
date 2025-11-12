import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Yeirin/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'neutral', 'warm'],
      description: '배지 스타일',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '배지 크기',
    },
    dot: {
      control: 'boolean',
      description: '점 표시 여부',
    },
    outline: {
      control: 'boolean',
      description: '아웃라인 스타일',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '일반',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: '완료',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: '진행중',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: '긴급',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: '대기',
  },
};

export const Warm: Story = {
  args: {
    variant: 'warm',
    children: '추천',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: '작은 배지',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: '중간 배지',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '큰 배지',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'warm',
    icon: '⭐',
    children: 'Best',
  },
};

export const WithDot: Story = {
  args: {
    variant: 'success',
    dot: true,
    children: '신규',
  },
};

export const Outline: Story = {
  args: {
    variant: 'primary',
    outline: true,
    children: '아웃라인',
  },
};

export const OutlineWithIcon: Story = {
  args: {
    variant: 'warm',
    outline: true,
    icon: '💛',
    children: '특별',
  },
};

export const DonationStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="success" icon="✅">
        목표 달성
      </Badge>
      <Badge variant="warning" icon="⏰">
        마감 임박
      </Badge>
      <Badge variant="error" icon="🚨">
        긴급
      </Badge>
      <Badge variant="primary" icon="💡">
        진행중
      </Badge>
      <Badge variant="neutral">대기</Badge>
    </div>
  ),
};

export const ProgramCategories: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="warm" icon="💛">
        심리상담
      </Badge>
      <Badge variant="primary" icon="📚">
        교육지원
      </Badge>
      <Badge variant="success" icon="🏥">
        의료지원
      </Badge>
      <Badge variant="warning" icon="🏠">
        주거지원
      </Badge>
      <Badge variant="neutral" icon="🍚">
        급식지원
      </Badge>
    </div>
  ),
};

export const AchievementBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Badge variant="warm" size="lg" icon="🏆">
          대한민국 나눔대상
        </Badge>
        <Badge variant="success" size="lg" icon="🎖️">
          투명성 1등급
        </Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Badge variant="primary" size="md" icon="✨">
          기부금 우수단체
        </Badge>
        <Badge variant="success" size="md" icon="💚">
          사회공헌 대상
        </Badge>
      </div>
    </div>
  ),
};

export const DonorLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Badge variant="error" size="lg" icon="💎">
        다이아몬드 (월 10만원 이상)
      </Badge>
      <Badge variant="primary" size="lg" icon="👑">
        플래티넘 (월 5만원 이상)
      </Badge>
      <Badge variant="warm" size="md" icon="⭐">
        골드 (월 3만원 이상)
      </Badge>
      <Badge variant="success" size="md" icon="🌟">
        실버 (월 1만원 이상)
      </Badge>
      <Badge variant="neutral" size="sm">
        프렌즈 (일시 후원)
      </Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="success" dot>
        접수 완료
      </Badge>
      <Badge variant="warning" dot>
        검토중
      </Badge>
      <Badge variant="primary" dot>
        진행중
      </Badge>
      <Badge variant="success" dot>
        완료
      </Badge>
      <Badge variant="error" dot>
        반려
      </Badge>
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="primary" outline>
        일반
      </Badge>
      <Badge variant="success" outline>
        성공
      </Badge>
      <Badge variant="warning" outline>
        경고
      </Badge>
      <Badge variant="error" outline>
        오류
      </Badge>
      <Badge variant="warm" outline>
        추천
      </Badge>
    </div>
  ),
};

export const MixedStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: '#6B7280' }}>긴급 모금:</span>
        <Badge variant="error" icon="🚨" size="lg">
          긴급
        </Badge>
        <Badge variant="warning" dot>
          5일 남음
        </Badge>
        <Badge variant="success" outline>
          85% 달성
        </Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: '#6B7280' }}>정기 후원:</span>
        <Badge variant="warm" icon="💛">
          심리상담
        </Badge>
        <Badge variant="primary" dot>
          진행중
        </Badge>
        <Badge variant="success" outline size="sm">
          234명 참여
        </Badge>
      </div>
    </div>
  ),
};
