# Soul 디자인 시스템 적용 가이드

## 🎨 개요

외주업체에서 받은 "내친구 소울이" 프로젝트의 전문적인 디자인을 Yeirin 디자인 시스템에 통합했습니다.

Soul 프로젝트의 세련된 UI/UX 패턴, 색상 팔레트, 타이포그래피를 기반으로 yeirin-design-system을 대폭 업데이트했습니다.

---

## 📦 업데이트 내용

### 1. 색상 시스템 (Color Tokens)

**위치**: `packages/tokens/src/colors.ts`

#### 메인 컬러 팔레트

```typescript
// Soul Main Colors - 따뜻한 오렌지/노랑 계열
primary: {
  50: '#FFF5D1',   // main400 - lightest
  100: '#FFE49E',  // main300
  200: '#FFD653',  // main200
  300: '#FFA600',  // main100 - 메인 브랜드 컬러 ⭐
  // ... 9단계 색상
}

// Soul Orange - 활력과 에너지
secondary: {
  500: '#FF6300', // sub100 - 메인 오렌지 ⭐
  // ... 9단계 색상
}

// Soul Accent Colors
accent: {
  mint: '#5FE39C',   // sub200 - 민트 그린
  purple: '#7F7BFF', // sub300 - 퍼플
  red: '#FF6300',
}

// Soul Gray Scale - 세밀한 7단계
gray: {
  50: '#FFFFFF',   // gray100
  100: '#F8F8F8',  // gray200
  200: '#EAEAEA',  // gray300
  300: '#CCCCCC',  // gray400
  400: '#999999',  // gray500
  500: '#666666',  // gray600
  700: '#222222',  // gray700
  // ...
}
```

#### Semantic Colors

- **Success**: Soul mint (`#5FE39C`) 활용
- **Error**: Soul orange (`#FF6300`) 활용
- **Warning**: Soul main100 (`#FFA600`) 활용
- **Info**: Soul purple (`#7F7BFF`) 활용

---

### 2. 타이포그래피 시스템

**위치**: `packages/tokens/src/typography.ts`

#### 폰트 패밀리

```typescript
fontFamily: {
  sans: 'Pretendard, -apple-system, ...',  // 기본 폰트
  tmoney: 'Tmoney, Pretendard, ...',       // 특수 폰트 (로고, 타이틀)
  mono: 'Menlo, Monaco, ...',
}
```

#### 폰트 사이즈 (Base: 8px)

```typescript
fontSize: {
  xs: '1rem',      // 8px
  sm: '1.25rem',   // 10px
  base: '1.75rem', // 14px ⭐ 기본
  md: '2rem',      // 16px
  lg: '2.25rem',   // 18px
  xl: '2.5rem',    // 20px
  '2xl': '3rem',   // 24px
  '3xl': '3.5rem', // 28px
  '4xl': '4.5rem', // 36px
  '5xl': '6rem',   // 48px
}
```

#### 폰트 웨이트

```typescript
fontWeight: {
  regular: '400',   // pr - Pretendard Regular
  semibold: '600',  // ps - Pretendard SemiBold
  bold: '700',      // pb - Pretendard Bold
  normal: '400',    // tb - Tmoney normal
}
```

#### 라인 하이트 & 레터 스페이싱

```typescript
lineHeight: {
  tight: '1.3',     // 대형 텍스트 (≥28px)
  normal: '1.4',    // 기본 ⭐
  relaxed: '1.5',
}

letterSpacing: {
  tight: '-0.03em', // 기본 ⭐
  normal: '0',
  wide: '0.025em',
}
```

---

### 3. 애니메이션 시스템

**위치**: `packages/tokens/src/animations.ts`

#### 애니메이션 효과

```typescript
animations: {
  fadeIn,      // 페이드 인
  fadeOut,     // 페이드 아웃
  slideUp,     // 슬라이드 업
  slideDown,   // 슬라이드 다운
  slideIn,     // 슬라이드 인 (좌 → 우)
  expand,      // 확장
  shrink,      // 축소
  bounceIn,    // 바운스 인 (탄성 효과)
}
```

#### Transitions

```typescript
transitions: {
  fast: '0.15s ease',
  base: '0.2s ease',     // 기본 ⭐
  slow: '0.3s ease',
  colors: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
}
```

---

### 4. 유틸리티 함수

**위치**: `packages/tokens/src/utils.ts`

#### CSS 헬퍼

```typescript
cssHelpers: {
  // Flexbox
  flexRow: { display: 'flex', alignItems: 'center' },
  flexCol: { display: 'flex', flexDirection: 'column' },
  flexCenter: { display: 'flex', alignItems: 'center', justifyContent: 'center' },

  // Position
  floatCenter: { position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
  absoluteCenter: { /* ... */ },

  // Scroll
  scroll: { overflowX: 'hidden', overflowY: 'auto', overscrollBehavior: 'none' },
  hiddenScroll: { /* 스크롤바 숨김 */ },

  // Accessibility
  visuallyHidden: { /* 스크린 리더용 */ },

  // User Interaction
  stopDrag: { userSelect: 'none', /* ... */ },

  // Text
  truncate: { /* 말줄임 */ },
  lineClamp: (lines) => ({ /* ... */ }),
}
```

#### 브레이크포인트 & 미디어 쿼리

```typescript
breakpoints: {
  mobile: '480px',   // max-width
  tablet: '1024px',  // max-width
  desktop: '1280px',
}

mediaQueries: {
  mobile: '@media only screen and (max-width: 480px)',
  tablet: '@media only screen and (max-width: 1024px)',
  desktop: '@media only screen and (min-width: 1280px)',
}
```

#### Shadow & Z-index

```typescript
shadows: {
  sm, base, md, lg, xl, '2xl', inner
}

zIndex: {
  base: 0,
  dropdown: 1000,
  modal: 1050,
  tooltip: 1070,
}
```

---

### 5. Button 컴포넌트

**위치**: `packages/ui/src/Button/Button.tsx`

#### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'gray' | 'delete';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}
```

#### Variants

- **primary**: 메인 브랜드 컬러 (`#FFA600`) - 주요 액션
- **secondary**: 서브 컬러 - 보조 액션
- **outline**: 아웃라인 스타일 - 비강조 액션
- **gray**: 그레이 배경 - 비활성화된 느낌
- **delete**: 삭제 액션 - 빨간색 텍스트

#### Sizes

- **sm**: 40px 높이, 14px 폰트
- **md**: 48px 높이, 18px 폰트 (기본)
- **lg**: 56px 높이, 20px 폰트

#### 사용 예시

```tsx
import { Button } from '@yeirin/ui';

<Button variant="primary" size="md" fullWidth>
  확인
</Button>

<Button variant="secondary" loading>
  처리 중...
</Button>

<Button variant="delete" size="sm">
  삭제
</Button>
```

---

### 6. Input 컴포넌트

**위치**: `packages/ui/src/Input/Input.tsx`

#### Props

```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
  endIcon?: React.ReactNode;
}
```

#### Features

- ✅ **Focus State**: 포커스 시 메인 컬러 보더
- ✅ **Error State**: 에러 시 오렌지 보더 & 텍스트
- ✅ **ReadOnly**: 읽기 전용 시 회색 배경
- ✅ **End Icon**: 우측 아이콘 지원 (검색, 눈 아이콘 등)
- ✅ **Selection Color**: 텍스트 선택 시 브랜드 컬러

#### 사용 예시

```tsx
import { Input } from '@yeirin/ui';

<Input
  label="이메일"
  placeholder="이메일을 입력하세요"
  error="유효한 이메일을 입력하세요"
/>

<Input
  inputSize="lg"
  endIcon={<SearchIcon />}
  placeholder="검색..."
/>

<Input
  readOnly
  value="읽기 전용"
  helperText="수정할 수 없습니다"
/>
```

---

### 7. 전역 CSS Reset

**위치**: `packages/ui/src/styles/reset.css`

#### 주요 특징

- ✅ **Pretendard & Tmoney 폰트** 자동 로드 (CDN)
- ✅ **Base Font Size**: 50% (8px 기준)
- ✅ **모던 CSS Reset**: 크로스 브라우저 호환
- ✅ **스크롤바 숨김**: 깔끔한 UI
- ✅ **기본 타이포그래피**: Soul 스타일 적용

#### 적용 방법

```tsx
// App.tsx 또는 main.tsx에서
import '@yeirin/ui/styles/reset.css';
```

---

### 8. Assets

#### Icons

**위치**: `packages/icons/src/soul/`

Soul 프로젝트에서 가져온 아이콘들:

- `icon_arrow.svg`, `icon_back.svg`, `icon_go.svg`
- `icon_check.svg`, `icon_checked.svg`, `icon_uncheck.svg`
- `icon_search.svg`, `icon_edit.svg`, `icon_download.svg`
- `icon_user.svg`, `icon_book.svg`, `icon_tablet.svg`
- `icon_eyeon.svg`, `icon_eyeoff.svg`, `icon_mic.svg`
- `icon_send.svg`, `icon_soundon.svg`, `icon_soundoff.svg`
- 기타 30+ 아이콘

#### Images

**위치**: `packages/ui/src/assets/images/`

- `logo.png`: 소울이 로고
- `gretting.png`: 인사 이미지
- `check_safe.png`, `check_normal.png`, `check_warn.png`: 체크 상태 이미지
- `move_stop.png`: 정지 이미지

---

## 🚀 시작하기

### 1. 토큰 사용

```tsx
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  transitions,
  animations,
  cssHelpers,
  mediaQueries,
} from '@yeirin/tokens';

// 색상 사용
const primaryButton = {
  backgroundColor: colors.primary[300],
  color: colors.white,
};

// 레이아웃 헬퍼 사용
const container = {
  ...cssHelpers.flexRow,
  gap: spacing[4],
};

// 애니메이션 사용
const fadeIn = {
  animation: `${animations.fadeIn.name} ${animations.fadeIn.duration} ${animations.fadeIn.timingFunction}`,
};
```

### 2. 컴포넌트 사용

```tsx
import { Button, Input } from '@yeirin/ui';

function MyForm() {
  return (
    <div>
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
      />
      <Button variant="primary" fullWidth>
        제출
      </Button>
    </div>
  );
}
```

### 3. 전역 스타일 적용

```tsx
// main.tsx
import '@yeirin/ui/styles/reset.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

---

## 🎯 디자인 원칙

Soul 디자인 시스템은 다음 원칙을 따릅니다:

1. **따뜻함**: 오렌지/노랑 계열의 따뜻한 색상 팔레트
2. **명확성**: 높은 대비와 명확한 타이포그래피
3. **친근함**: 부드러운 모서리(16px 기본)와 적절한 여백
4. **일관성**: 통일된 스페이싱(8px 기준), 컬러, 폰트 시스템
5. **접근성**: WCAG 기준 준수, 시맨틱 컬러 사용

---

## 📚 추가 리소스

- [Soul 프로젝트 소스](soul/weak_child_front/)
- [Yeirin 디자인 시스템](yeirin-design-system/)
- [Pretendard 폰트](https://github.com/orioncactus/pretendard)
- [Tmoney 폰트](https://noonnu.cc/font_page/359)

---

## 🔄 마이그레이션 가이드

### 기존 코드에서 Soul 디자인으로 전환

#### Before (기존)

```tsx
// 기존 Yeirin 컬러
backgroundColor: colors.primary[500]  // #FABE00

// 기존 버튼
<Button variant="warm" />
```

#### After (Soul 적용)

```tsx
// Soul 컬러
backgroundColor: colors.primary[300]  // #FFA600

// Soul 버튼
<Button variant="primary" />
```

### 주요 변경사항

1. **색상**: primary/secondary 재정의, accent 구조 변경
2. **폰트**: Pretendard 기본, 사이즈 체계 변경 (8px 기준)
3. **컴포넌트**: Button/Input props 및 스타일 업데이트
4. **유틸리티**: 새로운 헬퍼 함수 및 애니메이션 추가

---

## ✅ 체크리스트

디자인 시스템 적용 시 확인사항:

- [ ] `@yeirin/ui/styles/reset.css` import
- [ ] Pretendard 폰트 로드 확인 (DevTools)
- [ ] 색상 토큰 업데이트 확인
- [ ] Button/Input 컴포넌트 교체
- [ ] 반응형 브레이크포인트 적용
- [ ] 애니메이션 효과 테스트
- [ ] 크로스 브라우저 테스트

---

**작성일**: 2025-01-16
**버전**: 1.0.0
**업데이트**: Soul Design System Integration
