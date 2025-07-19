## 📝 Gitmoji 커밋 컨벤션

프로젝트에서는 커밋 메시지를 아래와 같은 **Gitmoji 스타일**로 작성합니다.  
각 커밋은 기능 목적에 따라 적절한 이모지와 타입을 사용해 일관된 이력을 유지합니다.

### ✅ 커밋 메시지 형식

`<emoji> <type>(optional scope): <변경 요약>`

**예시:**

- ✨ feat(login): Kakao 소셜 로그인 추가  
- 🐛 fix(api): POST 요청 실패 버그 수정  

---

### 🗂️ 커밋 타입과 의미

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

---

### 💡 커밋 예시

- ✨ feat(auth): Google 로그인 기능 구현  
- 🐛 fix(login): 토큰 만료 시 자동 로그아웃 처리  
- 🎨 style: 불필요한 console.log 제거  
- 📝 docs(readme): 사용 방법 업데이트  
- ♻️ refactor(api): API 요청 로직 공통 함수로 분리  
- ✅ test(user): 회원가입 실패 케이스 테스트 추가  
- 🔧 chore: eslint 설정 및 pre-commit hook 추가  
- 🚀 build: Vercel 배포 설정 추가  
