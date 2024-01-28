# Nebaram React-i18next + Redux-toolkit Migration

![image](https://github.com/yjglab/nebaram/assets/70316567/37a6f010-c733-4825-88f0-f2f3256cbb18)
![lighthouse](https://github.com/yjglab/nebaram/assets/70316567/d7357bdd-7514-4e00-920c-4df263a450dd)

### 브랜치 설명

- 프로덕션 환경에서 페이지 인터셉트(병렬 라우팅)가 되지 않는 문제 해결을 시도해보고자 기존에 사용된 국제화 라이브러리
  next-intl을 i18next로 마이그레이션 진행한 파일입니다.
- 마이그레이션 완료된 브랜치에서 순수 State 관리로 인한 데이터 중복 로드를 막기 위해 Redux가 추가로 도입되었습니다.

### 구동

패키지 설치

```bash
npm i
```

개발 환경 실행 (병렬 라우팅 동작)

```bash
npm run dev
```

배포 환경 실행

```bash
npm run prod
```

### 결론

> #I2-2. Next App Router는 배포 환경에서 아직 i18n 페이지 인터셉트를 지원하지 않음. (24.01.28)

- [Pages i18n breaks Intercepting Routes #60592](https://github.com/vercel/next.js/discussions/60592)

![image](https://github.com/yjglab/nebaram/assets/70316567/5bc77120-ce07-4052-9db3-460c082852b1)
