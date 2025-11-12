import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta = {
  title: 'Yeirin/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated', 'warm', 'gentle'],
      description: '카드의 스타일 - 예이린 브랜드 컬러를 반영합니다',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '450px' }}>
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
        <h3 style={{ marginTop: 0, color: '#1F2937' }}>프로그램 안내</h3>
        <p style={{ lineHeight: 1.6 }}>예이린의 심리상담 프로그램에 대한 기본 정보를 확인하세요.</p>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: (
      <>
        <h3 style={{ marginTop: 0, color: '#1F2937' }}>아동 케어 정보</h3>
        <p style={{ lineHeight: 1.6 }}>취약아동을 위한 전문적인 심리상담과 지원 프로그램을 제공합니다.</p>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <h3 style={{ marginTop: 0, color: '#1F2937' }}>특별 프로그램</h3>
        <p style={{ lineHeight: 1.6 }}>아이들의 건강한 성장을 위한 맞춤형 프로그램을 만나보세요.</p>
      </>
    ),
  },
};

export const Warm: Story = {
  args: {
    variant: 'warm',
    children: (
      <>
        <h3 style={{ marginTop: 0, color: '#78350F' }}>따뜻한 마음 나눔</h3>
        <p style={{ lineHeight: 1.6, color: '#78350F' }}>
          여러분의 소중한 후원으로 아이들에게 희망을 선물할 수 있습니다.
        </p>
      </>
    ),
  },
};

export const Gentle: Story = {
  args: {
    variant: 'gentle',
    children: (
      <>
        <h3 style={{ marginTop: 0, color: '#1F2937' }}>공지사항</h3>
        <p style={{ lineHeight: 1.6 }}>예이린의 최신 소식과 행사 정보를 확인하세요.</p>
      </>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    variant: 'elevated',
    header: <h3 style={{ margin: 0, color: '#1F2937' }}>후원 신청</h3>,
    children: (
      <p style={{ lineHeight: 1.6 }}>
        정기 후원을 통해 아이들에게 지속적인 도움을 주실 수 있습니다.
      </p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    variant: 'bordered',
    children: (
      <p style={{ lineHeight: 1.6 }}>
        프로그램 참여를 원하시면 신청서를 작성해주세요.
      </p>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button variant="outline" size="sm">
          취소
        </Button>
        <Button variant="primary" size="sm">
          신청하기
        </Button>
      </div>
    ),
  },
};

export const DonationCard: Story = {
  args: {
    variant: 'warm',
    header: <h3 style={{ margin: 0, color: '#78350F' }}>정기 후원</h3>,
    children: (
      <>
        <p style={{ lineHeight: 1.6, marginTop: 0, color: '#78350F' }}>
          매월 일정 금액을 후원하여 아이들의 밝은 미래를 함께 만들어가세요.
        </p>
        <ul style={{ lineHeight: 1.8, color: '#78350F' }}>
          <li>월 1만원: 교육 지원</li>
          <li>월 3만원: 심리상담 지원</li>
          <li>월 5만원: 종합 케어 지원</li>
        </ul>
      </>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: '#78350F' }}>세액공제 혜택 가능</span>
        <Button variant="warm" size="sm">
          후원하기
        </Button>
      </div>
    ),
  },
};
