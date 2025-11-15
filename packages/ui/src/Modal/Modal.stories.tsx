import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
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
    closeOnOverlayClick: {
      control: 'boolean',
      description: '오버레이 클릭시 닫기',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to manage state
const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        모달 열기
      </Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '알림',
    children: '이것은 기본 모달입니다.',
    size: 'md',
    closeOnOverlayClick: true,
  },
};

export const WithTitle: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '정말 삭제하시겠습니까?',
    children: '삭제된 데이터는 복구할 수 없습니다.',
    size: 'md',
  },
};

export const WithFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '확인',
    children: '작업을 계속 진행하시겠습니까?',
    size: 'md',
    footer: (
      <>
        <Button variant="gray" style={{ flex: 1 }}>
          취소
        </Button>
        <Button variant="primary" style={{ flex: 1 }}>
          확인
        </Button>
      </>
    ),
  },
};

export const SmallSize: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '비밀번호 변경',
    children: '비밀번호가 성공적으로 변경되었습니다.',
    size: 'sm',
    footer: (
      <Button variant="primary" style={{ width: '100%' }}>
        확인
      </Button>
    ),
  },
};

export const MediumSize: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '알림',
    children: '중간 크기의 모달입니다. 더 많은 내용을 담을 수 있습니다.',
    size: 'md',
  },
};

export const LargeSize: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '상세 정보',
    children:
      '큰 크기의 모달입니다. 더 복잡한 내용이나 폼 요소들을 표시할 수 있습니다. 이 모달은 더 넓은 공간을 제공하여 사용자에게 더 많은 정보를 전달할 수 있습니다.',
    size: 'lg',
  },
};

export const CustomContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '사용자 정의 콘텐츠',
    size: 'md',
    children: (
      <div style={{ padding: '2rem 0' }}>
        <p style={{ marginBottom: '1rem', color: '#666', fontSize: '1.75rem' }}>
          모달 안에 커스텀 콘텐츠를 넣을 수 있습니다.
        </p>
        <ul style={{ paddingLeft: '2rem', color: '#666', fontSize: '1.75rem' }}>
          <li>리스트 아이템 1</li>
          <li>리스트 아이템 2</li>
          <li>리스트 아이템 3</li>
        </ul>
      </div>
    ),
    footer: (
      <Button variant="primary" style={{ width: '100%' }}>
        닫기
      </Button>
    ),
  },
};

export const NoOverlayClose: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '중요 알림',
    children: '이 모달은 배경을 클릭해도 닫히지 않습니다.',
    size: 'md',
    closeOnOverlayClick: false,
    footer: (
      <Button variant="primary" style={{ width: '100%' }}>
        확인
      </Button>
    ),
  },
};

export const DeleteConfirm: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '삭제 확인',
    children: '정말로 이 항목을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.',
    size: 'md',
    footer: (
      <>
        <Button variant="gray" style={{ flex: 1 }}>
          취소
        </Button>
        <Button variant="delete" style={{ flex: 1 }}>
          삭제
        </Button>
      </>
    ),
  },
};
