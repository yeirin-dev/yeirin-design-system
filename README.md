# Yeirin Design System

사내 디자인시스템 - React 컴포넌트 라이브러리 및 디자인 토큰

## 📚 문서

- **Storybook**: https://yeirin-dev.github.io/yeirin-design-system
- **Getting Started**: [GETTING_STARTED.md](./GETTING_STARTED.md)

## 🚀 빠른 시작

### 설치

```bash
# GitHub Token 환경변수 설정
export GITHUB_TOKEN=your_github_token_here

# 프로젝트에 .npmrc 생성
echo "@yeirin:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}" >> .npmrc

# 패키지 설치
pnpm add @yeirin/ui @yeirin/tokens
```

### 사용 예시

```tsx
import { Button, Input, Card } from '@yeirin/ui';
import { colors, spacing } from '@yeirin/tokens';

function App() {
  return (
    <Card variant="elevated">
      <h2>로그인</h2>
      <Input
        label="이메일"
        type="email"
        placeholder="you@example.com"
      />
      <Input
        label="비밀번호"
        type="password"
        placeholder="********"
      />
      <Button variant="primary" size="md">
        로그인
      </Button>
    </Card>
  );
}
```

## 📦 패키지

이 모노레포는 다음 패키지들을 포함합니다:

- **@yeirin/ui**: React UI 컴포넌트 라이브러리
- **@yeirin/tokens**: 디자인 토큰 (colors, spacing, typography)

## 🛠️ 개발

### 필수 요구사항

- Node.js >= 18.0.0
- pnpm >= 10.0.0

### 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/yeirin-dev/yeirin-design-system.git
cd yeirin-design-system

# 의존성 설치
pnpm install

# 패키지 빌드
pnpm build

# Storybook 실행
pnpm --filter storybook dev
```

### 사용 가능한 명령어

```bash
pnpm build          # 모든 패키지 빌드
pnpm dev            # 개발 모드로 실행
pnpm changeset      # 새로운 changeset 생성
pnpm version-packages  # 버전 업데이트
pnpm release        # 빌드 후 패키지 배포 (로컬에서만)
```

**참고**: 패키지 배포는 현재 수동으로만 가능합니다. 자세한 내용은 [PUBLISHING.md](./PUBLISHING.md)를 참고하세요.

## 🎨 컴포넌트

### Button

다양한 variant와 size를 지원하는 버튼 컴포넌트

```tsx
<Button variant="primary" size="md">클릭</Button>
<Button variant="secondary" size="sm">취소</Button>
<Button variant="outline" size="lg">더보기</Button>
```

### Input

Label, error, helper text를 지원하는 인풋 컴포넌트

```tsx
<Input
  label="이메일"
  type="email"
  placeholder="you@example.com"
  helperText="유효한 이메일을 입력하세요"
/>
```

### Card

Header, body, footer 슬롯을 가진 카드 컴포넌트

```tsx
<Card
  variant="elevated"
  header={<h3>제목</h3>}
  footer={<Button>저장</Button>}
>
  카드 내용
</Card>
```

## 📝 버전 관리

이 프로젝트는 [Changesets](https://github.com/changesets/changesets)를 사용하여 버전을 관리합니다.

### 새로운 기능/변경사항 추가 시:

1. 변경사항 작업 완료
2. `pnpm changeset` 실행
3. 변경 유형 선택 (major/minor/patch)
4. 변경사항 설명 작성
5. Commit 후 Push

## 🤝 기여하기

1. 이 저장소를 Fork
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 Commit (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📄 라이센스

이 프로젝트는 사내 전용이며 외부 배포가 제한됩니다.

## 🔗 링크

- [GitHub Repository](https://github.com/yeirin-dev/yeirin-design-system)
- [Storybook Documentation](https://yeirin-dev.github.io/yeirin-design-system)
- [Issues](https://github.com/yeirin-dev/yeirin-design-system/issues)

## 💡 문의

문제가 발생하거나 질문이 있으시면 [Issue](https://github.com/yeirin-dev/yeirin-design-system/issues)를 생성해주세요.
