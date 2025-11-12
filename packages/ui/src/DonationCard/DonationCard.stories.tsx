import type { Meta, StoryObj } from '@storybook/react';
import { DonationCard } from './DonationCard';

const meta = {
  title: 'Yeirin/DonationCard',
  component: DonationCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    urgent: {
      control: 'boolean',
      description: '긴급 후원 여부',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '목표 달성률 (%)',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DonationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularDonation: Story = {
  args: {
    title: '취약아동 심리상담 지원',
    description: '경제적 어려움으로 심리상담을 받지 못하는 아이들에게 전문 상담을 제공합니다.',
    amount: 1500000,
    goalAmount: 3000000,
    progress: 50,
    supporters: 75,
    daysLeft: 15,
    benefits: [
      '세액공제 혜택 (최대 15%)',
      '정기 활동 소식지 발송',
      '후원자 초청 행사 참여',
    ],
    onDonate: () => alert('후원 페이지로 이동합니다'),
  },
};

export const UrgentDonation: Story = {
  args: {
    title: '긴급 의료비 지원',
    description: '갑작스러운 질병으로 긴급 치료가 필요한 민호(가명, 8세)를 도와주세요.',
    amount: 8500000,
    goalAmount: 10000000,
    progress: 85,
    supporters: 234,
    daysLeft: 3,
    urgent: true,
    benefits: ['100% 투명한 사용 내역 공개', '실시간 후원 현황 알림'],
    onDonate: () => alert('긴급 후원하기'),
  },
};

export const WithImage: Story = {
  args: {
    title: '겨울 방한용품 지원',
    description: '따뜻한 겨울을 보낼 수 있도록 방한복, 이불 등 필수 물품을 지원합니다.',
    amount: 2800000,
    goalAmount: 5000000,
    progress: 56,
    supporters: 142,
    daysLeft: 20,
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=200&fit=crop',
    benefits: ['후원금 100% 물품 구매에 사용', '배송 완료 사진 제공'],
    onDonate: () => alert('후원하기'),
  },
};

export const UrgentWithImage: Story = {
  args: {
    title: '화재 피해 가정 긴급 지원',
    description: '화재로 모든 것을 잃은 가정에 생필품과 임시 거처를 지원합니다.',
    amount: 4500000,
    goalAmount: 6000000,
    progress: 75,
    supporters: 189,
    daysLeft: 5,
    urgent: true,
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=200&fit=crop',
    benefits: ['긴급 지원금 즉시 전달', '장기 회복 프로그램 연계'],
    onDonate: () => alert('긴급 후원하기'),
  },
};

export const HighProgress: Story = {
  args: {
    title: '교육 장학금 지원',
    description: '경제적 어려움으로 학업을 포기하려는 학생들에게 장학금을 지원합니다.',
    amount: 4700000,
    goalAmount: 5000000,
    progress: 94,
    supporters: 315,
    daysLeft: 7,
    benefits: ['1:1 학습 멘토링 제공', '장학금 수여식 초대', '학생 성장 리포트 제공'],
    onDonate: () => alert('후원하기'),
  },
};

export const StartingDonation: Story = {
  args: {
    title: '새 학기 학용품 지원',
    description: '새 학기를 맞이하는 아이들에게 필요한 학용품을 지원합니다.',
    amount: 350000,
    goalAmount: 3000000,
    progress: 12,
    supporters: 18,
    daysLeft: 45,
    benefits: ['학용품 세트 직접 전달', '학교 적응 프로그램 제공'],
    onDonate: () => alert('후원하기'),
  },
};

export const CompletedDonation: Story = {
  args: {
    title: '추석 명절 선물 지원',
    description: '따뜻한 명절을 보낼 수 있도록 명절 선물을 전달했습니다.',
    amount: 5000000,
    goalAmount: 5000000,
    progress: 100,
    supporters: 412,
    benefits: ['선물 전달 완료', '감사 편지 발송 예정'],
  },
};

export const SimpleDonation: Story = {
  args: {
    title: '정기 후원',
    description: '매월 일정 금액을 후원하여 지속적인 도움을 제공할 수 있습니다.',
    benefits: [
      '월 1만원: 1명의 아이 1개월 교육 지원',
      '월 3만원: 1명의 아이 1개월 심리상담',
      '월 5만원: 1명의 아이 종합 케어 지원',
    ],
    onDonate: () => alert('정기 후원 신청'),
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <DonationCard
        title="취약아동 심리상담"
        description="전문 상담사를 통한 정기 심리상담을 지원합니다."
        amount={2100000}
        goalAmount={3000000}
        progress={70}
        supporters={105}
        daysLeft={12}
        onDonate={() => alert('후원하기')}
      />
      <DonationCard
        title="긴급 의료비 지원"
        description="긴급 치료가 필요한 아동을 도와주세요."
        amount={7500000}
        goalAmount={10000000}
        progress={75}
        supporters={187}
        daysLeft={5}
        urgent={true}
        onDonate={() => alert('긴급 후원하기')}
      />
      <DonationCard
        title="교육 장학금"
        description="학업을 지속할 수 있도록 장학금을 지원합니다."
        amount={4200000}
        goalAmount={5000000}
        progress={84}
        supporters={256}
        daysLeft={20}
        onDonate={() => alert('후원하기')}
      />
    </div>
  ),
};
