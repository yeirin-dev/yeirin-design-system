# 시작 가이드

Yeirin Design System을 프로젝트에서 사용하기 위한 단계별 가이드입니다.

## 📋 사전 준비

### 1. GitHub Personal Access Token 발급

GitHub Packages를 사용하려면 Personal Access Token이 필요합니다.

1. https://github.com/settings/tokens 접속
2. "Generate new token (classic)" 클릭
3. Note: `yeirin-design-system-access` 입력
4. Expiration: 원하는 만료 기간 선택
5. Scopes:
   - ✅ `read:packages` (패키지 설치용)
   - ✅ `write:packages` (패키지 배포용, 필요시)
6. "Generate token" 클릭
7. 생성된 토큰을 안전한 곳에 복사 (다시 볼 수 없습니다!)

### 2. 환경 설정

#### macOS / Linux

```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx

# 설정 적용
source ~/.bashrc  # 또는 source ~/.zshrc
```

#### Windows (PowerShell)

```powershell
# 환경 변수 설정
$env:GITHUB_TOKEN="ghp_xxxxxxxxxxxx"

# 영구 설정 (시스템 환경 변수)
[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN','ghp_xxxxxxxxxxxx','User')
```

### 3. 토큰 확인

```bash
echo $GITHUB_TOKEN  # macOS/Linux
echo $env:GITHUB_TOKEN  # Windows
```

## 🚀 프로젝트에서 사용하기

### Step 1: .npmrc 파일 생성

프로젝트 루트 디렉토리에 `.npmrc` 파일을 생성합니다:

```bash
# 프로젝트 디렉토리에서
echo "@yeirin:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}" >> .npmrc
```

또는 수동으로 파일 생성:

```
@yeirin:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

⚠️ **중요**: `.npmrc` 파일을 `.gitignore`에 추가하여 토큰이 노출되지 않도록 하세요!

### Step 2: 패키지 설치

```bash
# pnpm 사용
pnpm add @yeirin/ui @yeirin/tokens

# npm 사용
npm install @yeirin/ui @yeirin/tokens

# yarn 사용
yarn add @yeirin/ui @yeirin/tokens
```

### Step 3: 프로젝트에서 사용

#### React 프로젝트

```tsx
// App.tsx
import { Button, Input, Card } from '@yeirin/ui';
import { colors, spacing } from '@yeirin/tokens';

function App() {
  return (
    <div style={{ padding: spacing[6] }}>
      <Card variant="elevated">
        <h2>회원가입</h2>

        <Input
          label="이메일"
          type="email"
          placeholder="you@example.com"
        />

        <Input
          label="비밀번호"
          type="password"
          placeholder="8자 이상"
        />

        <Button variant="primary" size="md">
          가입하기
        </Button>
      </Card>
    </div>
  );
}

export default App;
```

#### TypeScript 프로젝트

타입이 자동으로 포함되어 있어 별도 설정이 필요 없습니다:

```tsx
import { ButtonProps } from '@yeirin/ui';

const customButton: ButtonProps = {
  variant: 'primary',
  size: 'md',
  children: '클릭',
};
```

## 🎨 컴포넌트 사용 예시

### Button 컴포넌트

```tsx
import { Button } from '@yeirin/ui';

// 기본 사용
<Button variant="primary" size="md">
  기본 버튼
</Button>

// 다양한 Variant
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// 다양한 Size
<Button size="sm">작은 버튼</Button>
<Button size="md">중간 버튼</Button>
<Button size="lg">큰 버튼</Button>

// Disabled 상태
<Button disabled>비활성화</Button>

// 이벤트 핸들러
<Button onClick={() => console.log('클릭!')}>
  클릭하세요
</Button>
```

### Input 컴포넌트

```tsx
import { Input } from '@yeirin/ui';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <Input
        label="이메일"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        helperText="유효한 이메일을 입력하세요"
      />

      <Input
        label="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
        error={error}
      />
    </>
  );
}
```

### Card 컴포넌트

```tsx
import { Card, Button } from '@yeirin/ui';

// 기본 카드
<Card variant="default">
  <p>기본 카드 내용</p>
</Card>

// Header와 Footer가 있는 카드
<Card
  variant="elevated"
  header={<h3>프로필 설정</h3>}
  footer={
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
      <Button variant="outline" size="sm">취소</Button>
      <Button variant="primary" size="sm">저장</Button>
    </div>
  }
>
  <p>여기에 프로필 정보를 입력하세요</p>
</Card>
```

## 🎨 디자인 토큰 사용

```tsx
import { colors, spacing, fontSize, fontWeight } from '@yeirin/tokens';

// 인라인 스타일
<div style={{
  backgroundColor: colors.primary[500],
  padding: `${spacing[4]} ${spacing[6]}`,
  fontSize: fontSize.lg,
  fontWeight: fontWeight.bold,
}}>
  커스텀 스타일
</div>

// CSS-in-JS (styled-components, emotion 등)
const StyledDiv = styled.div`
  background-color: ${colors.primary[500]};
  padding: ${spacing[4]} ${spacing[6]};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
`;
```

### 사용 가능한 토큰

#### Colors
```tsx
colors.primary[50-900]    // 메인 브랜드 컬러
colors.secondary[50-900]  // 보조 컬러
colors.success[50-900]    // 성공 상태
colors.error[50-900]      // 에러 상태
colors.warning[50-900]    // 경고 상태
colors.gray[50-900]       // 그레이스케일
colors.white              // 흰색
colors.black              // 검정색
```

#### Spacing
```tsx
spacing[0-24]            // 0px ~ 96px
```

#### Typography
```tsx
fontSize.xs ~ fontSize['5xl']    // 12px ~ 48px
fontWeight.normal ~ fontWeight.bold
lineHeight.none ~ lineHeight.loose
```

## 🔧 트러블슈팅

### 문제 1: "Unable to authenticate" 오류

```bash
npm ERR! code E401
npm ERR! Unable to authenticate
```

**해결방법**:
1. `GITHUB_TOKEN` 환경변수가 제대로 설정되었는지 확인
2. 토큰에 `read:packages` 권한이 있는지 확인
3. `.npmrc` 파일이 올바른지 확인

```bash
# 토큰 확인
echo $GITHUB_TOKEN

# .npmrc 확인
cat .npmrc
```

### 문제 2: "404 Not Found" 오류

**해결방법**:
1. 패키지 이름이 정확한지 확인 (`@yeirin/ui`)
2. Registry URL이 올바른지 확인
3. Repository 접근 권한이 있는지 확인

### 문제 3: TypeScript 타입 오류

**해결방법**:
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install

# 또는
pnpm install --force
```

### 문제 4: 스타일이 적용되지 않음

버튼이나 카드의 기본 스타일이 이상하다면, CSS Reset을 추가하세요:

```tsx
// index.css 또는 App.css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## 📚 추가 자료

- [Storybook 문서](https://yeirin-dev.github.io/yeirin-design-system)
- [GitHub Repository](https://github.com/yeirin-dev/yeirin-design-system)
- [이슈 리포트](https://github.com/yeirin-dev/yeirin-design-system/issues)

## 💬 지원

문제가 해결되지 않으면:
1. [GitHub Issues](https://github.com/yeirin-dev/yeirin-design-system/issues)에 문의
2. 팀 슬랙 채널에 질문
3. README.md의 예시 코드 참고

---

**마지막 업데이트**: 2025-11-12
