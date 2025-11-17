# 디자인시스템 구축 가이드 (GitHub 생태계)

> Claude Code에게 단계별로 명령하면서 사내 디자인시스템을 구축하세요.

## 📋 사전 준비

```bash
# 1. GitHub CLI 설치 확인
gh --version

# 2. GitHub 로그인
gh auth login

# 3. Personal Access Token 생성
# https://github.com/settings/tokens
# Scopes: repo, write:packages, read:packages, workflow
```

---

## 🚀 Phase 1: 프로젝트 초기화 (10분)

### Step 1.1: Private Repository 생성

```bash
# Claude Code에게 명령:
"GitHub에 'company-design-system'이라는 private repository를 생성하고, 
Turborepo 템플릿으로 monorepo를 초기화해줘"

# 또는 수동 실행:
gh repo create yourcompany/company-design-system --private --clone
cd company-design-system
npx create-turbo@latest . --package-manager pnpm
```

### Step 1.2: 디렉토리 구조 생성

```bash
# Claude Code에게 명령:
"다음 디렉토리 구조를 생성해줘:
- packages/ui (React 컴포넌트)
- packages/tokens (디자인 토큰)
- packages/icons (아이콘)
- apps/storybook (문서)
- .github/workflows (CI/CD)"
```

**기대 구조:**
```
company-design-system/
├── packages/
│   ├── ui/
│   ├── tokens/
│   └── icons/
├── apps/
│   └── storybook/
├── .github/
│   └── workflows/
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## 📦 Phase 2: 패키지 설정 (15분)

### Step 2.1: UI 패키지 생성

```bash
# Claude Code에게 명령:
"packages/ui 패키지를 생성해줘:
- package.json에 name을 '@yourcompany/ui'로 설정
- publishConfig를 GitHub Packages로 설정
- React, TypeScript, Tsup으로 빌드 설정
- src/Button, src/Input, src/Card 컴포넌트 생성"
```

**필수 package.json 설정:**
```json
{
  "name": "@yourcompany/ui",
  "version": "0.1.0",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yourcompany/company-design-system.git"
  },
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  }
}
```

### Step 2.2: Tokens 패키지 생성

```bash
# Claude Code에게 명령:
"packages/tokens 패키지를 생성해줘:
- colors.json (primary, secondary, error, success 등)
- spacing.json (xs, sm, md, lg, xl)
- typography.json (fontSize, fontWeight, lineHeight)
- index.ts에서 모든 토큰 export"
```

**예시 colors.json:**
```json
{
  "colors": {
    "primary": "#3B82F6",
    "secondary": "#8B5CF6",
    "success": "#10B981",
    "error": "#EF4444",
    "gray": {
      "50": "#F9FAFB",
      "900": "#111827"
    }
  }
}
```

---

## 📖 Phase 3: Storybook 설정 (10분)

### Step 3.1: Storybook 초기화

```bash
# Claude Code에게 명령:
"apps/storybook에 Storybook을 설치하고 설정해줘:
- React + Vite 사용
- packages/ui의 컴포넌트들을 자동으로 찾도록 설정
- Autodocs 활성화
- 기본 Button, Input, Card 스토리 생성"

# 또는 수동:
cd apps/storybook
npx storybook@latest init --type react
```

**필수 .storybook/main.ts 설정:**
```typescript
export default {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
```

### Step 3.2: 예시 스토리 작성

```bash
# Claude Code에게 명령:
"packages/ui/src/Button/Button.stories.tsx 파일을 생성해줘:
- Meta와 Story 타입 사용
- Primary, Secondary, Outline variant 예시
- argTypes로 variant, size, disabled 제어 가능하게"
```

---

## 🤖 Phase 4: GitHub Actions 설정 (15분)

### Step 4.1: Storybook 배포 워크플로우

```bash
# Claude Code에게 명령:
".github/workflows/storybook.yml 파일을 생성해줘:
- main 브랜치 push 시 실행
- pnpm으로 의존성 설치
- Storybook 빌드
- GitHub Pages에 배포
- pages: write 권한 설정"
```

**워크플로우 템플릿:**
```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm --filter storybook build-storybook
      
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v2
        with:
          path: 'apps/storybook/storybook-static'
      - uses: actions/deploy-pages@v2
```

### Step 4.2: Package 배포 워크플로우

```bash
# Claude Code에게 명령:
".github/workflows/publish.yml 파일을 생성해줘:
- main 브랜치 push 시 실행
- 빌드, 테스트, 린트 실행
- Changesets로 버전 관리
- GitHub Packages에 자동 배포
- packages: write 권한 설정"
```

### Step 4.3: Changesets 설정

```bash
# Claude Code에게 명령:
"Changesets를 설정해줘:
- pnpm add -Dw @changesets/cli
- pnpm changeset init
- .changeset/config.json 생성"

# 수동 실행:
pnpm add -Dw @changesets/cli
pnpm changeset init
```

---

## 🎨 Phase 5: 기본 컴포넌트 개발 (30분)

### Step 5.1: Button 컴포넌트

```bash
# Claude Code에게 명령:
"packages/ui/src/Button/Button.tsx를 개발해줘:
- variant: primary, secondary, outline
- size: sm, md, lg
- disabled 상태
- TypeScript interface 정의
- @yourcompany/tokens의 colors, spacing 사용
- Button.stories.tsx도 함께 작성"
```

### Step 5.2: Input 컴포넌트

```bash
# Claude Code에게 명령:
"packages/ui/src/Input/Input.tsx를 개발해줘:
- type: text, email, password
- placeholder, disabled, error 상태
- 에러 메시지 표시
- Input.stories.tsx도 함께 작성"
```

### Step 5.3: Card 컴포넌트

```bash
# Claude Code에게 명령:
"packages/ui/src/Card/Card.tsx를 개발해줘:
- header, body, footer 슬롯
- variant: default, bordered, elevated
- Card.stories.tsx도 함께 작성"
```

---

## 🔧 Phase 6: 빌드 및 테스트 (10분)

### Step 6.1: 빌드 확인

```bash
# Claude Code에게 명령:
"모든 패키지를 빌드하고 오류가 없는지 확인해줘"

# 수동 실행:
pnpm turbo run build
```

### Step 6.2: Storybook 로컬 실행

```bash
# Claude Code에게 명령:
"Storybook을 로컬에서 실행해줘"

# 수동 실행:
pnpm --filter storybook dev
# http://localhost:6006 접속 확인
```

---

## 🚢 Phase 7: 배포 및 설정 (10분)

### Step 7.1: GitHub Pages 활성화

```bash
# Claude Code에게 명령:
"GitHub Pages를 활성화하는 방법을 알려줘"

# 수동 실행:
# 1. GitHub Repository → Settings → Pages
# 2. Source: GitHub Actions 선택
# 3. Save
```

### Step 7.2: 첫 배포

```bash
# Claude Code에게 명령:
"모든 변경사항을 커밋하고 main 브랜치에 푸시해줘"

# 수동 실행:
git add .
git commit -m "feat: initial design system setup"
git push origin main

# GitHub Actions 탭에서 배포 진행 확인
# 완료 후 https://yourcompany.github.io/company-design-system 접속
```

---

## 📝 Phase 8: 문서 작성 (15분)

### Step 8.1: README.md 작성

```bash
# Claude Code에게 명령:
"루트 README.md를 작성해줘:
- 프로젝트 소개
- 설치 방법 (GitHub Packages 사용)
- 사용 예시
- 기여 방법
- Storybook 링크"
```

### Step 8.2: 팀원 온보딩 가이드

```bash
# Claude Code에게 명령:
"GETTING_STARTED.md를 작성해줘:
- GitHub Token 발급 방법
- .npmrc 설정 방법
- 패키지 설치 및 사용 예시
- Troubleshooting 섹션"
```

**GETTING_STARTED.md 템플릿:**
```markdown
# 시작 가이드

## 1. GitHub Token 발급
1. https://github.com/settings/tokens 접속
2. "Generate new token (classic)" 클릭
3. Scopes: `read:packages` 체크
4. Token 복사

## 2. 환경 설정
```bash
# .bashrc 또는 .zshrc에 추가
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx
```

## 3. 프로젝트에서 사용
```bash
# .npmrc 생성
echo "@yourcompany:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}" >> .npmrc

# 설치
pnpm add @yourcompany/ui @yourcompany/tokens

# 사용
import { Button } from '@yourcompany/ui';
import '@yourcompany/ui/dist/styles.css';
```

## 4. 문서
- Storybook: https://yourcompany.github.io/company-design-system
- GitHub: https://github.com/yourcompany/company-design-system
```

---

## ✅ Phase 9: 검증 체크리스트

```bash
# Claude Code에게 명령:
"다음 항목들을 체크해줘:
1. pnpm turbo run build가 성공하는가?
2. pnpm --filter storybook dev가 실행되는가?
3. GitHub Pages에 Storybook이 배포되었는가?
4. packages/ui/package.json에 publishConfig가 있는가?
5. .github/workflows 파일들이 올바른가?
6. README.md와 GETTING_STARTED.md가 작성되었는가?"
```

**수동 체크리스트:**
- [ ] Turborepo 빌드 성공
- [ ] Storybook 로컬 실행 확인
- [ ] GitHub Pages 배포 확인
- [ ] 최소 3개 컴포넌트 (Button, Input, Card)
- [ ] 각 컴포넌트 Stories 작성
- [ ] GitHub Actions 워크플로우 2개
- [ ] Changesets 설정
- [ ] 문서 2개 (README, GETTING_STARTED)

---

## 🎯 Phase 10: 팀원 테스트 (선택)

### Step 10.1: 테스트 프로젝트 생성

```bash
# 다른 디렉토리에서:
mkdir test-design-system && cd test-design-system
pnpm init

# .npmrc 생성
echo "@yourcompany:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > .npmrc

# 설치 테스트
pnpm add @yourcompany/ui

# 사용 테스트
# src/App.tsx 생성하여 Button 컴포넌트 import
```

---

## 🔄 Phase 11: 버전 관리 워크플로우

### 새 기능 추가 시

```bash
# Claude Code에게 명령:
"Toast 컴포넌트를 추가하고 changeset을 생성해줘"

# 수동 워크플로우:
# 1. 컴포넌트 개발
# 2. Changeset 생성
pnpm changeset
# → Select: @yourcompany/ui
# → Type: minor (새 기능)
# → Summary: "Added Toast component"

# 3. 커밋 & 푸시
git add .
git commit -m "feat: add Toast component"
git push origin main

# 4. GitHub Actions가 자동으로:
#    - 버전 업데이트 (0.1.0 → 0.2.0)
#    - CHANGELOG 생성
#    - GitHub Packages에 배포
```

---

## 📊 예상 소요 시간

| Phase | 내용 | 시간 |
|-------|------|------|
| 1 | 프로젝트 초기화 | 10분 |
| 2 | 패키지 설정 | 15분 |
| 3 | Storybook 설정 | 10분 |
| 4 | GitHub Actions | 15분 |
| 5 | 컴포넌트 개발 | 30분 |
| 6 | 빌드 및 테스트 | 10분 |
| 7 | 배포 | 10분 |
| 8 | 문서 작성 | 15분 |
| **합계** | | **1시간 55분** |

---

## 🆘 트러블슈팅

### 문제 1: GitHub Packages 설치 실패
```bash
# 해결: Token 권한 확인
gh auth status
# read:packages 권한이 있는지 확인
```

### 문제 2: GitHub Pages 배포 실패
```bash
# 해결: Repository Settings 확인
# Settings → Pages → Source가 "GitHub Actions"인지 확인
```

### 문제 3: Storybook 빌드 오류
```bash
# 해결: 캐시 삭제
rm -rf node_modules .turbo
pnpm install
pnpm turbo run build --force
```

---

## 🚀 다음 단계

구축 완료 후:

1. **팀 공유**: GETTING_STARTED.md를 Slack에 공유
2. **피드백 수집**: 1주일간 사용 후 개선점 파악
3. **컴포넌트 확장**: Modal, Dropdown, Table 등 추가
4. **Visual Regression**: Chromatic 연동 (무료 tier)
5. **접근성**: a11y 테스트 추가

---

## 📚 참고 링크

- [Turborepo 문서](https://turbo.build/repo/docs)
- [Storybook 문서](https://storybook.js.org/docs)
- [GitHub Packages 가이드](https://docs.github.com/en/packages)
- [Changesets 문서](https://github.com/changesets/changesets)

---

## 💡 Claude Code 사용 팁

### 효과적인 명령 패턴:

```
❌ "디자인시스템 만들어줘" 
   → 너무 모호함

✅ "packages/ui/src/Button 디렉토리를 생성하고,
   Button.tsx와 Button.stories.tsx 파일을 만들어줘.
   variant prop으로 primary, secondary를 지원해야 해"
   → 구체적이고 명확함
```

### 단계별 검증:

```
각 Phase 완료 후:
"지금까지 작업 내용을 요약하고, 다음 단계로 넘어가기 전에
 확인해야 할 사항을 알려줘"
```

---

**제작:** CTO를 위한 디자인시스템 구축 가이드
**버전:** 1.0.0
**최종 업데이트:** 2025-11-12