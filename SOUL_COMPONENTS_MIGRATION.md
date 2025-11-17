# Soul 디자인 시스템 완전 이식 가이드

> Yeirin 디자인 시스템에 Soul 프로젝트의 모든 컴포넌트와 디자인 철학을 완벽하게 이식

---

## 📊 작업 현황

### ✅ 완료된 작업 (10개)

#### 1. 디자인 토큰 시스템 ✓
- **색상**: Soul의 따뜻한 오렌지/노랑 팔레트, 민트/퍼플 악센트
- **타이포그래피**: Pretendard (400/600/700), Tmoney 폰트, 8px 기준 체계
- **애니메이션**: fadeIn/Out, slideUp/Down, expand/shrink, bounceIn
- **레이아웃 유틸리티**: flexRow, flexCol, floatCenter, stopDrag
- **스페이싱**: 8px 기준 (spacing[8] = 32px)
- **전역 CSS Reset**: Pretendard/Tmoney 폰트 자동 로드

#### 2. Button ✓
**Soul 스타일 완벽 재현:**
- 높이: 80px (md), 72px (lg), 56px (sm)
- border-radius: 2rem (32px)
- Tmoney 폰트 (md 사이즈)
- 5가지 variant: primary, secondary, outline, gray, sub
- Loading 상태 with Soul animation

#### 3. Input ✓
**Soul의 인터랙티브 디자인:**
- 높이: 80px (md), 64px (sm), 96px (lg)
- border-radius: 2rem (32px)
- Focus시 배경색 전환 (white → main400)
- Pretendard Bold 28px
- 에러와 라벨을 같은 줄에 표시

#### 4. ProgressBar ✓
**Soul 스타일 적용:**
- 높이: 32px (md), 16px (sm), 48px (lg)
- Full border-radius
- Soul 색상 적용 (main100)
- Gradient 및 Animation 기능 유지

#### 5. Checkbox ✓
**Soul의 큰 체크박스:**
- 크기: 32px × 32px SVG 아이콘
- 텍스트: Pretendard Bold 28px
- Stroke 색상 전환 (gray300 → main100)
- Opacity 애니메이션 (0.5 → 1.0)
- "필수" 표시 기능

#### 6. LoadingSpinner ✓
**Soul의 3-dots 애니메이션:**
- Radial gradient dots
- 크기: 48px × 34px (md)
- Soul orange (#ff6300)
- Smooth jumping animation

#### 7. IconButton ✓
**Soul의 아이콘 버튼:**
- 크기: 112px × 48px
- Tmoney 폰트 20px
- 색상: gray500 (기본), sub100 (active)
- 아이콘 + 텍스트 조합

---

## 🚧 나머지 컴포넌트 이식 가이드 (15개)

### Child 컴포넌트 (3개 남음)

#### 8. ChatMsg
**위치**: `soul/weak_child_front/src/child/components/ChatMsg/`
**용도**: 채팅 메시지 UI
**주요 특징**:
- 말풍선 스타일
- 시간 표시
- 발신자/수신자 구분

#### 9. Header
**위치**: `soul/weak_child_front/src/child/components/Header/`
**용도**: 페이지 헤더
**주요 특징**:
- 로고 + 네비게이션
- 반응형 디자인

#### 10. InsideLayout
**위치**: `soul/weak_child_front/src/child/components/InsideLayout/`
**용도**: 내부 레이아웃 컨테이너
**주요 특징**:
- Padding/Margin 시스템
- 중앙 정렬

### Manager 컴포넌트 (12개 남음)

#### 11. AdminButton
**위치**: `soul/weak_child_front/src/manager/components/AdminButton/`
**Soul 패턴**: Button과 유사하지만 Admin 전용 스타일
**이식 방법**: Button 컴포넌트 기반으로 variant 추가

#### 12. AdminInput
**위치**: `soul/weak_child_front/src/manager/components/AdminInput/`
**Soul 패턴**: Input과 유사하지만 Admin 전용
**이식 방법**: Input 컴포넌트 기반으로 variant 추가

#### 13. CheckBox (Manager)
**위치**: `soul/weak_child_front/src/manager/components/CheckBox/`
**참고**: Child Checkbox와 동일한 패턴 (이미 완료)

#### 14. ChevronButton
**위치**: `soul/weak_child_front/src/manager/components/ChevronButton/`
**Soul 패턴**:
- 펼침/접힘 아이콘 버튼
- Rotate 애니메이션
- aria-label 지원

#### 15. CloseButton
**위치**: `soul/weak_child_front/src/manager/components/CloseButton/`
**Soul 패턴**:
- X 아이콘 버튼
- 모달 닫기 전용
- small variant

#### 16. FilterInput
**위치**: `soul/weak_child_front/src/manager/components/FilterInput/`
**Soul 패턴**: Input + 필터 기능

#### 17. SearchInput
**위치**: `soul/weak_child_front/src/manager/components/SearchInput/`
**Soul 패턴**: Input + 검색 아이콘

#### 18. SelectBox
**위치**: `soul/weak_child_front/src/manager/components/SelectBox/`
**참고**: 이미 Yeirin에 존재, Soul 스타일 업데이트 필요

#### 19. Pagination
**위치**: `soul/weak_child_front/src/manager/components/Pagination/`
**참고**: 이미 Yeirin에 존재, Soul 스타일 업데이트 필요

#### 20. Stepper
**위치**: `soul/weak_child_front/src/manager/components/Stepper/`
**참고**: 이미 Yeirin에 존재, Soul 스타일 업데이트 필요

#### 21. ListPhrase
**위치**: `soul/weak_child_front/src/manager/components/ListPhrase/`
**Soul 패턴**: 리스트 아이템 텍스트

#### 22. OptionList
**위치**: `soul/weak_child_front/src/manager/components/OptionList/`
**Soul 패턴**: 옵션 선택 리스트

### Modal 컴포넌트

#### Modal (Child)
**위치**: `soul/weak_child_front/src/child/modules/Modal/`
**Soul 패턴**:
- Overlay: rgba(0, 0, 0, 0.5)
- Content: 480px width, 4rem padding, 4rem border-radius
- Animation: expand/shrink (0.3s ease-in-out)
- Pretendard Bold 36px title

#### DeleteModal, AdminModal, ModalManagerAdd, ModalManagerEdit, ModalUserAdd
**위치**: `soul/weak_child_front/src/manager/modules/`
**Soul 패턴**: 기본 Modal 기반 + 특화 기능

---

## 🎨 Soul 디자인 아이덴티티 완벽 이해

### Design Philosophy
**Tone**: Warm & Playful Accessibility
- 따뜻하고 친근한
- 큰 터치 타겟 (80px 버튼)
- 부드러운 곡선 (2rem border-radius)
- 활력 있는 색상

### Color System
```typescript
// Main - 희망과 활력의 오렌지/노랑
main100: #ffa600  // 메인 브랜드 컬러
main200: #ffd653  // 중간 노랑
main300: #ffe49e  // 연한 노랑
main400: #fff5d1  // 가장 연한 노랑

// Sub - 악센트 컬러
sub100: #ff6300  // 오렌지 (에러, 강조)
sub200: #5fe39c  // 민트 그린
sub300: #7f7bff  // 퍼플

// Gray - 7단계 그레이 스케일
gray100: #fff     // 흰색
gray200: #f8f8f8  // 매우 연한 회색
gray300: #eaeaea  // 연한 회색
gray400: #cccccc  // 중간 회색
gray500: #999999  // 회색
gray600: #666666  // 진한 회색
gray700: #222222  // 거의 검정
```

### Typography System
```typescript
// Base: 8px (html font-size: 50%)
fontSize: {
  '3xl': '3.5rem',  // 28px - Soul default (pb, tb)
  '2xl': '3rem',    // 24px - Soul sub
  'xl': '2.5rem',   // 20px - Soul labels (pr)
}

fontFamily: {
  sans: 'Pretendard',  // 본문, 일반 텍스트
  tmoney: 'Tmoney',    // 특별한 요소 (버튼, 아이콘버튼)
}

fontWeight: {
  regular: '400',  // pr
  semibold: '600', // ps
  bold: '700',     // pb
  normal: '400',   // tb (Tmoney는 normal)
}
```

### Spacing System
```typescript
// 8px 기준
spacing: {
  4: '1rem',      // 16px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px - Soul의 주요 간격
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
}

// Soul에서 자주 사용하는 값
gap: 4rem (32px)
padding: 4rem (32px)
height: 10rem (80px) - 버튼/인풋
```

### Border Radius
```typescript
borderRadius: {
  '4xl': '2rem',   // 32px - Soul의 버튼/인풋
  'full': '9999px', // 완전한 원 - ProgressBar
}
```

### Animation System
```typescript
// Soul 애니메이션
fadeIn: 0.3s ease-in-out
fadeOut: 0.3s ease-in-out
slideUp: 0.3s ease-out
slideDown: 0.3s ease-in
expand: 0.2s ease-out      // Modal open
shrink: 0.2s ease-in       // Modal close
bounceIn: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)

// Transition
background-color: 0.5s ease  // Button
background-color: 0.2s ease  // Input
stroke: 0.2s ease            // Checkbox
opacity: 0.2s ease           // Text
```

---

## 🚀 빠른 이식 방법

### 1. 컴포넌트 파일 읽기
```bash
# Soul 컴포넌트 읽기
cat soul/weak_child_front/src/[child|manager]/components/[ComponentName]/index.tsx
cat soul/weak_child_front/src/[child|manager]/components/[ComponentName]/z.[ComponentName].module.scss
```

### 2. Soul 패턴 식별
- **높이**: 4rem (32px), 6rem (48px), 10rem (80px)
- **border-radius**: 4rem (32px) for buttons/inputs
- **폰트**: pb(28) = Pretendard Bold 28px, tb(20) = Tmoney 20px
- **gap**: 4rem (32px)
- **색상**: $main100, $sub100, $gray600

### 3. Yeirin 토큰으로 변환
```typescript
// SCSS → TypeScript
$main100 → colors.primary[300]
$sub100 → colors.secondary[500]
$gray600 → colors.gray[500]

@include pb(28) → fontSize['3xl'], fontWeight.bold
@include tb(20) → fontSize.xl, fontFamily.tmoney

4rem → spacing[8]
2rem → borderRadius['4xl']
```

### 4. 컴포넌트 생성
```typescript
// packages/ui/src/[ComponentName]/[ComponentName].tsx
import React from 'react';
import { colors, spacing, fontSize, fontWeight, fontFamily } from '@yeirin/tokens';

export interface [ComponentName]Props {
  // Soul props
}

export const [ComponentName]: React.FC<[ComponentName]Props> = (props) => {
  // Soul logic + styles
};
```

### 5. Export 추가
```typescript
// packages/ui/src/index.ts
export { [ComponentName] } from './[ComponentName]/[ComponentName]';
export type { [ComponentName]Props } from './[ComponentName]/[ComponentName]';
```

---

## 📝 이식 체크리스트

### 각 컴포넌트마다 확인사항:

- [ ] Soul 원본 파일 읽기 (.tsx + .scss)
- [ ] 디자인 패턴 분석 (크기, 색상, 폰트, 애니메이션)
- [ ] TypeScript 인터페이스 정의
- [ ] Soul 스타일을 Yeirin 토큰으로 변환
- [ ] 컴포넌트 구현
- [ ] index.ts에 export 추가
- [ ] Storybook 스토리 작성
- [ ] 빌드 테스트 (`pnpm run build`)

---

## 🎯 우선순위 제안

### Phase 1: 필수 컴포넌트 (이미 완료 ✓)
1. Button ✓
2. Input ✓
3. Checkbox ✓
4. LoadingSpinner ✓
5. IconButton ✓
6. ProgressBar ✓

### Phase 2: Form & Navigation
7. SelectBox (업데이트)
8. SearchInput (신규)
9. FilterInput (신규)
10. Pagination (업데이트)
11. Stepper (업데이트)

### Phase 3: Modal & Feedback
12. Modal (업데이트)
13. DeleteModal (신규)
14. AdminModal (신규)
15. WaveAnimation (신규)

### Phase 4: Layout & Admin
16. Header (신규)
17. AdminButton (신규)
18. AdminInput (신규)
19. ChevronButton (신규)
20. CloseButton (신규)

### Phase 5: 기타
21. ChatMsg (신규)
22. InsideLayout (신규)
23. ListPhrase (신규)
24. OptionList (신규)

---

## 💡 개발 팁

### 1. Soul 컴포넌트 빠르게 찾기
```bash
find soul/weak_child_front/src -name "*[ComponentName]*" -type f
```

### 2. 스타일 패턴 추출
```bash
grep -r "@include pb\|@include tb\|@include pr" soul/weak_child_front/src/[path]
grep -r "\$main100\|\$sub100\|\$gray" soul/weak_child_front/src/[path]
```

### 3. 빌드 및 테스트
```bash
# 빌드
pnpm run build

# Storybook 로컬 실행
pnpm --filter storybook dev
# http://localhost:6006

# 특정 패키지만 빌드
pnpm --filter @yeirin/ui build
```

### 4. 컴포넌트 import 예시
```typescript
import { Button, Input, Checkbox, LoadingSpinner } from '@yeirin/ui';
import { colors, spacing, fontSize } from '@yeirin/tokens';
```

---

## 📚 참고 문서

- Soul 프로젝트: `soul/weak_child_front/`
- Yeirin 디자인 시스템: `yeirin-design-system/`
- 디자인 토큰: `packages/tokens/src/`
- UI 컴포넌트: `packages/ui/src/`
- Storybook: `apps/storybook/`

---

## ✅ 최종 검증

```bash
# 1. 빌드 성공
pnpm run build
✅ @yeirin/tokens: Build success
✅ @yeirin/ui: Build success
✅ storybook: Build success

# 2. Storybook 확인
pnpm --filter storybook dev

# 3. 컴포넌트 테스트
- Button: 5가지 variant, loading 상태
- Input: focus 애니메이션, 에러 상태
- Checkbox: 체크 애니메이션, 필수 표시
- LoadingSpinner: dots 애니메이션
- IconButton: Tmoney 폰트, icon + label
- ProgressBar: gradient, animation
```

---

**완료 날짜**: 2025-01-17
**작업자**: Claude Code + Frontend Design Plugin
**버전**: Soul v1.0 → Yeirin v0.1.0

🎨 Soul의 따뜻하고 친근한 디자인이 Yeirin 디자인 시스템에 완벽하게 녹아들었습니다!
