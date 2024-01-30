# Nebaram V0.6 새 바람을 실현할 첫 도약

![image](https://github.com/yjglab/nebaram/assets/70316567/37a6f010-c733-4825-88f0-f2f3256cbb18)

### 개요

- 네바람은 저를 표현하는 퍼스널 브랜드입니다. 이 브랜드를 통해 스스로 어떤 목표를 가진 개발자인지, 어떤 강점들이 있는지를 앞으로 꾸준히 국제적으로 알리고자 제작되었습니다. [https://nebaram.vercel.app](https://nebaram.vercel.app "nebaram")
- 이 프로젝트는 기존 개인 포트폴리오 사이트를 Next.js App Router로 이전하며 리뉴얼한 사이트입니다. 이전 사이트를 보시려면 [여기](https://yukjaekyeong.web.app)를 방문해주세요.

<br />

### 구현부 요약

- 기존 포트폴리오 웹을 Next App Router로 변환하여 코드와 UI 리뉴얼 및 렌더링 최적화
- 초기 렌더링, SEO 개선 작업을 통해 페이지 성능 45% 향상 (LightHouse 기준, 67 -> 97.5)
- 페이지별 JSON 다국어 메시지 파일 제공, 국제화(i18n) 라우팅 구현
- 사용자 Viewport의 스크롤에 따라 적용되는 애니메이션 효과 적용
- 동적 모션 UI 및 Apple HIG 반영한 반응형 웹 퍼블리싱 적용

<br />

### 기술 태그

<div> 
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/Redux--Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white">
<img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=for-the-badge&logo=Tailwindcss&logoColor=black">
<img src="https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=Framer&logoColor=black">
</div>

<br />

### Version Release

> 0.6 (latest, 24.01.29)

- [국제화 라이브러리 마이그레이션 (next-intl -> i18next)](https://github.com/yjglab/nebaram/wiki/%EA%B5%AD%EC%A0%9C%ED%99%94-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%5B24.01.23-%E2%80%90-24.01.29%5D)
- 루트 레이아웃 및 페이지 제거, Locale Route 리디렉션 및 언어 감지 미들웨어 추가.
- 데이터 중복 로드를 막기 위해 Redux Toolkit 도입.
- 렌더링 최적화 진행.

> 0.5 (23.12.27)

- 디렉토리 구조 재조정 및 코드 리팩터링
- 종속성 업데이트 (Next@13 -> @14 / next-intl@3beta -> @3.4)

### 주요 기능 소개

#### 개발자 소개

> 스크롤 애니메이션

스크롤에 따라 애니메이팅 된 요소들을 보여줍니다. 각 섹션별로 디자인의 차별점을 두었고 슬라이더는 모바일을 고려해 드래그 전환이 가능하도록 개발했습니다.

![owner-1](https://github.com/yjglab/nebaram/assets/70316567/398dd7db-ce6a-48f3-9110-6ea406cfcf89)

<br />

> 스크롤 애니메이션

연속되는 요소들은 각 요소의 인덱스 값을 이용해 딜레이를 조절하여 부드럽게 등장하도록 개발했습니다.

![owner-2](https://github.com/yjglab/nebaram/assets/70316567/99e6b536-b492-4be1-996a-41d9d7c23b62)

<br />

#### 프로젝트

> 프로젝트 페이지

- 현재까지 진행한 프로젝트들을 열거하여 보여주는 페이지입니다. 이미지 호버 시 간단한 설명과 기술 정보를 보여주고 클릭하면 상세 페이지로 이동할 수 있습니다.

![projects-1](https://github.com/yjglab/nebaram/assets/70316567/9bcc22a8-0795-4c4b-8b3d-cf8e3e92e078)

<br />

- 상세 페이지에는 실제 페이지를 들어가지 않고도 어떤 서비스인지 알아볼 수 있도록 큰 슬라이더를 넣었고 슬라이드 별로 상세한 설명을 기록했습니다. 페이지의 하단에는 프로젝트의 개요, 기술 정보, 구현 기능 등 자세한 정보를 배치했습니다.

![projects-2](https://github.com/yjglab/nebaram/assets/70316567/52c45f50-707f-42e7-8325-0f983bb0bd94)

<br />

#### 국제화 라우팅

> 국제화 라우팅 지원

- 다른 언어의 JSON 번역파일을 제공합니다 (현재: 한국어/영어). 상단의 Language 버튼을 클릭해 다국어 페이지로 전환할 수 있습니다.

![intl-1](https://github.com/yjglab/nebaram/assets/70316567/398e4b93-2d96-44bd-a761-bd0eb2629fcc)

<br />

#### 반응형 스크린

> 반응형 페이지 지원

- 네바람 웹 페이지는 어떤 크기의 화면도 상관없이 맞춤으로 동작하는 반응형 페이지로 구현되었습니다.

![responsive](https://github.com/yjglab/nebaram/assets/70316567/4120b1f7-53f5-4f2b-a0b1-29796b2cd351)

<br />

### Issues

> #I2-1. Next App Router + Next-intl의 인터셉트 라우팅이 배포 환경에서 동작하지 않음. (24.01.23)

- [Error: Usage of next-intl APIs in Server Components is currently only available for dynamic rendering' after upgrading to next@13.5.2](https://github.com/amannn/next-intl/issues/521)
- [Unable to use next-intl with parallel or intercepted routes (from App router)](https://github.com/amannn/next-intl/issues/255)
- [Next-intl + SSG in build mode, interception routing does not work properly](https://github.com/amannn/next-intl/issues/642#issuecomment-1816537858)
- next@14.0.4-canary.34 + next-intl@3.4.1로 빌드파일에서 인터셉트 되는 것 확인. 병렬 페이징은 되지 않음.
- 빌드파일 실행환경과 배포환경이 다름 (01.24)
- 현재 개발모드에서만 정상 동작.

> #I2-2. Next App Router는 배포 환경에서 아직 i18n 페이지 인터셉트를 지원하지 않음. (24.01.28)

- [Pages i18n breaks Intercepting Routes #60592](https://github.com/vercel/next.js/discussions/60592)

> #I1-1. SEO와 성능 개선 작업

- 초기 렌더링(FCP) 2.5초, 레이아웃 불안정(CLS) 지수 0.6이었고 검색엔진 최적화(SEO) 지수가 68로 매우 낮아 노출 빈도에 취약
- 렌더링: 이미지 크기 30kb이내로 2배이상 압축 / 기본 레이아웃을 서버사이드에서 렌더링 → (FCP 개선) 초기 로딩 2초 향상
- SEO: 시맨틱 태그 사용, 이미지 설명 입력, 사이트맵과 페이지 별로 메타데이터 추가. (크롤러의 웹 페이지 색인 과정 용이)
- UX: 크기와 비율 고정, 이미지가 존재하는 컨테이너 공간 확보하여 레이아웃이 변동할 가능성 제거 / 페이지 이동, GIF와 같이 큰 이미지에 대한 로딩상황 제공 / 통일된 폰트와 명확한 색상 대비 적용 -> 컨텐츠에 집중.
- 결과: 5개 성능 지표의 평균 지수가 67에서 96으로 향상 / FCP와 CLS, SEO를 각각 0.6초, 0.005, 100으로 개선.

![image](https://github.com/yjglab/nebaram/assets/70316567/7e6a5a0f-ed25-4346-8d9f-119c388ecd02)

### References

- [BFCache, 최적화 방법](https://web.dev/bfcache/)
- [TS, Index Signature](https://dev.to/keento0809/index-signature-in-typescript-37g1)
- [Cumulative Layout Shift](https://nextjs.org/learn/seo/web-performance/cls)
- [manifest 작성 리스트](https://365kim.tistory.com/169)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components)
- [Pages i18n breaks Intercepting Routes #60592](https://github.com/vercel/next.js/discussions/60592)

![image](https://github.com/yjglab/nebaram/assets/70316567/5bc77120-ce07-4052-9db3-460c082852b1)
