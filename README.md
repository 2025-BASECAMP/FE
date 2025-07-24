## 🌿 Git branch
| 브랜치 이름      | 역할        | 설명                     |
| ----------- | --------- | ---------------------- |
| `main`      | 배포용 안정 버전 | 항상 배포 가능한 상태 유지        |
| `develop`   | 개발 통합 브랜치 | 기능 개발 완료 후 이곳에 머지      |
| `feature/*` | 새로운 기능 개발 | 기능별로 분리된 개발 브랜치        |
| `fix/*`     | 버그 수정     | 버그 수정 작업용 브랜치          |
| `hotfix/*`  | 긴급 버그 수정  | 배포 중인 브랜치 직접 수정 |

#### 네이밍 규칙
`작업/#이슈번호`

브랜치 이름은 작업 종류와 이슈 번호를 포함하여 작성합니다.


#### 작업 흐름
1. develop 브랜치에서 기능별 feature/* 브랜치 생성
2. 기능 완성 후 feature/* → develop으로 Pull Request 생성 및 머지
3. develop 브랜치에서 충분히 테스트 후 main 브랜치로 머지 및 배포
4. 긴급한 버그는 hotfix/* 브랜치를 main에서 생성해 수정 후 바로 main과 develop에 머지

<br>

## 📁 파일 구조

#### 프론트엔드 구조

```bash
frontend/src/
├── apis/                  # API 요청 함수 정의
├── components/            # 재사용 가능한 컴포넌트
├── hooks/                 # 커스텀 훅
├── images/                # 이미지 리소스
├── layouts/                # 레이아웃
├── mocks/                 # Mock 데이터
├── pages/                 # 각 화면 페이지
├── styles/                # 스타일 파일
├── utils/                 # 유틸리티 함수
├── App.css                # 전체 앱 스타일
├── App.jsx                # 최상위 컴포넌트
├── index.css              # 기본 스타일
└── main.jsx               # 진입점
```

<br>

## 📝 Gitmoji 커밋 컨벤션

프로젝트에서는 커밋 메시지를 아래와 같은 **Gitmoji 스타일**로 작성합니다.  
각 커밋은 기능 목적에 따라 적절한 이모지와 타입을 사용해 일관된 이력을 유지합니다.

#### ✅ 커밋 메시지 형식

`<emoji> <type>(optional scope): <변경 요약>`

**예시:**

- ✨ feat(login): Kakao 소셜 로그인 추가  
- 🐛 fix(api): POST 요청 실패 버그 수정  

---

#### 🗂️ 커밋 타입과 의미

| 이모지 | 타입 (`type`) | 설명 |
|--------|---------------|------|
| ✨     | `feat`         | 새로운 기능 추가 |
| 🐛     | `fix`          | 버그 수정 |
| 🎨     | `style`        | 코드 포맷팅, 세미콜론 등 스타일 수정 (기능 변화 없음) |
| 📝     | `docs`         | 문서 수정 (README, 주석 등) |
| ♻️     | `refactor`     | 리팩토링 (기능 변화 없이 구조 개선) |
| ✅     | `test`         | 테스트 코드 추가 또는 수정 |
| 🔧     | `chore`        | 빌드 설정, 패키지 설치, 기타 설정 작업 |
| 🚀     | `build`        | 빌드 및 배포 관련 작업 |
| 🔒     | `security`     | 보안 관련 수정 |
| 👷     | `ci`           | CI 설정 변경 (GitHub Actions 등) |
| ⬆️     | `deps`         | 패키지 의존성 업데이트 |

**예시:**

- ✨ feat(auth): Google 로그인 기능 구현  
- 🐛 fix(login): 토큰 만료 시 자동 로그아웃 처리  
- 🎨 style: 불필요한 console.log 제거  
- 📝 docs(readme): 사용 방법 업데이트  
- ♻️ refactor(api): API 요청 로직 공통 함수로 분리  
- ✅ test(user): 회원가입 실패 케이스 테스트 추가  
- 🔧 chore: eslint 설정 및 pre-commit hook 추가  
- 🚀 build: Vercel 배포 설정 추가  
