import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Button } from '../Button/Button';
import { useState } from 'react';

const meta = {
  title: 'Yeirin/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'warm'],
      description: '알림의 타입 - 상황에 맞는 색상과 아이콘',
    },
    title: {
      control: 'text',
      description: '알림 제목',
    },
    onClose: {
      action: 'closed',
      description: '닫기 버튼 클릭 핸들러',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: '프로그램 안내',
    children: '새로운 심리상담 프로그램이 시작됩니다. 신청 기간은 11월 15일부터 30일까지입니다.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: '신청 완료',
    children: '프로그램 신청이 성공적으로 완료되었습니다. 담당자가 곧 연락드릴 예정입니다.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: '마감 임박',
    children: '후원 프로그램 신청 마감이 3일 남았습니다. 서둘러 신청해주세요.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: '입력 오류',
    children: '필수 항목을 모두 입력해주세요. 연락처와 이메일은 필수 입력 사항입니다.',
  },
};

export const Warm: Story = {
  args: {
    variant: 'warm',
    title: '감사 인사',
    children: '여러분의 따뜻한 마음 덕분에 100명의 아이들이 도움을 받았습니다. 진심으로 감사드립니다.',
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    children: '이번 주 토요일 오후 2시에 특별 행사가 있습니다.',
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'warm',
    title: '새로운 소식',
    icon: '🎉',
    children: '예이린이 2024 대한민국 나눔대상을 수상했습니다!',
  },
};

export const WithCloseButton: Story = {
  args: {
    variant: 'info',
    title: '공지사항',
    children: '12월 25일은 휴무일입니다.',
    onClose: () => alert('알림이 닫혔습니다'),
  },
};

export const LongContent: Story = {
  args: {
    variant: 'warm',
    title: '후원 안내',
    children: (
      <>
        <p style={{ margin: '0 0 12px 0' }}>
          정기 후원은 취약아동들에게 지속적인 도움을 제공할 수 있는 가장 효과적인 방법입니다.
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>매월 자동 결제로 편리하게 후원</li>
          <li>세액공제 혜택 (연말정산 시 최대 15%)</li>
          <li>정기 소식지 발송</li>
          <li>후원자 초청 행사 참여 기회</li>
        </ul>
      </>
    ),
  },
};

export const DonationReminder: Story = {
  args: {
    variant: 'warm',
    title: '후원 감사',
    icon: '💝',
    children: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>
          10,000원의 후원으로 한 아이에게 1개월간 심리상담을 제공할 수 있습니다.
        </p>
        <Button variant="warm" size="sm">
          지금 후원하기
        </Button>
      </div>
    ),
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <div>
          <Button variant="primary" onClick={() => setVisible(true)}>
            알림 다시 보기
          </Button>
        </div>
      );
    }

    return (
      <Alert
        variant="warm"
        title="환영합니다!"
        onClose={() => setVisible(false)}
      >
        예이린 홈페이지에 오신 것을 환영합니다. 함께 아이들의 밝은 미래를 만들어가요.
      </Alert>
    );
  },
};

export const MultipleAlerts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="warm" title="신규 후원자">
        이번 달 새롭게 50명의 후원자님이 함께해주셨습니다.
      </Alert>
      <Alert variant="success" title="목표 달성">
        11월 후원 목표 200만원을 달성했습니다!
      </Alert>
      <Alert variant="info">
        다음 주 수요일, 온라인 설명회가 진행됩니다.
      </Alert>
    </div>
  ),
};
