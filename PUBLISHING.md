# 패키지 배포 가이드

## GitHub Packages 수동 배포

### 1. 준비사항

GitHub Personal Access Token이 필요합니다:
- Scopes: `write:packages`, `read:packages`, `repo`
- 환경변수로 설정: `export GITHUB_TOKEN=ghp_xxxxxxxxxxxx`

### 2. 배포 단계

```bash
# 1. 변경사항 확인
git status

# 2. Changeset 생성
pnpm changeset

# 선택사항:
# - @yeirin/tokens, @yeirin/ui 중 변경된 패키지 선택
# - 버전 타입 선택:
#   - patch: 버그 수정 (0.1.0 -> 0.1.1)
#   - minor: 새 기능 (0.1.0 -> 0.2.0)
#   - major: Breaking changes (0.1.0 -> 1.0.0)
# - 변경사항 요약 작성

# 3. 버전 업데이트 (CHANGELOG 자동 생성)
pnpm changeset version

# 4. 빌드
pnpm turbo run build --filter='@yeirin/*'

# 5. 배포
pnpm changeset publish

# 6. Git 푸시 (버전 태그 포함)
git push --follow-tags
```

### 3. 자동 배포 (GitHub Actions)

Repository Settings에서 설정이 필요합니다:

1. **Settings** → **Actions** → **General**
2. **Workflow permissions**에서:
   - ✅ Read and write permissions 선택
   - ✅ Allow GitHub Actions to create and approve pull requests 체크

설정 후, `workflow_dispatch`로 수동 실행하거나 자동 배포를 활성화할 수 있습니다.

## 주의사항

- 처음 배포 시에는 로컬에서 수동으로 배포하는 것을 권장합니다
- 배포 전 반드시 `pnpm turbo run build`로 빌드 확인
- GITHUB_TOKEN 환경변수가 설정되어 있어야 합니다
- Storybook은 자동 배포되므로 패키지만 수동 배포하면 됩니다

## 버전 전략

- **Patch (0.1.x)**: 버그 수정, 문서 업데이트
- **Minor (0.x.0)**: 새로운 컴포넌트, 기능 추가
- **Major (x.0.0)**: Breaking changes, API 변경

## 현재 상태

- **Storybook**: 자동 배포 활성화 ✅
- **Packages**: 수동 배포 (workflow_dispatch)

필요할 때 GitHub Actions에서 "Run workflow" 버튼으로 실행하거나, 로컬에서 배포할 수 있습니다.
