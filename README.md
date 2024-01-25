# Nebaram V0.5 새 바람을 실현할 첫 도약

![image](https://github.com/yjglab/nebaram/assets/70316567/37a6f010-c733-4825-88f0-f2f3256cbb18)
![lighthouse](https://github.com/yjglab/nebaram/assets/70316567/d7357bdd-7514-4e00-920c-4df263a450dd)

### 개요

- 네바람은 웹 개발자로서 네 가지 역량을 갖춘 저를 표현하는 퍼스널 브랜드입니다. 네바람을 통해서 저는 어떤 목표를 가진 개발자인지, 어떤 프로젝트를 진행했었고 어떤 강점들이 있는지를 알리고 싶어 제작되었습니다. [https://nebaram.vercel.app](https://nebaram.vercel.app "nebaram")
- 이 프로젝트는 기존 개인 포트폴리오 사이트를 NextJS로 이전하며 리뉴얼한 사이트입니다. 이전 사이트를 보시려면 [여기](https://yukjaekyeong.web.app)를 방문해주세요.

<br />

### 구현부 요약

- 기존의 개인 포트폴리오 웹 페이지를 Next@13 으로 이주하여 디자인과 코드 리뉴얼
- 초기 렌더링, SEO 개선 작업을 통해 페이지 성능 42% 향상 (LightHouse 기준, 67 -> 96)
- 메타 데이터와 라우팅, JSON 번역 파일 제공하여 다국어 기능 구현
- 사용자 Viewport의 스크롤에 따라 적용되는 애니메이션 효과 적용
- Apple HIG(Human Interface Guideline) 반영한 반응형 웹 퍼블리싱, PWA 적용

<br />

### 기술 태그

<div> 
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=for-the-badge&logo=Tailwindcss&logoColor=black">
<img src="https://img.shields.io/badge/Emotion-569A31?style=for-the-badge&logo=Emotion&logoColor=black">
<img src="https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=Framer&logoColor=black">
</div>

<br />

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

#### 다국어 라우팅

> 다국어 라우팅 지원

- 다른 언어의 JSON 번역파일을 제공합니다 (현재: 한국어/영어). 상단의 Language 버튼을 클릭해 다국어 페이지로 전환할 수 있습니다.

![intl-1](https://github.com/yjglab/nebaram/assets/70316567/398e4b93-2d96-44bd-a761-bd0eb2629fcc)

<br />

#### 반응형 스크린

> 반응형 페이지 지원

- 네바람 웹 페이지는 어떤 크기의 화면도 상관없이 맞춤으로 동작하는 반응형 페이지로 구현되었습니다.

![responsive](https://github.com/yjglab/nebaram/assets/70316567/4120b1f7-53f5-4f2b-a0b1-29796b2cd351)

<br />

### 이슈

> Next App Router + Next-intl의 인터셉트 라우팅이 배포 환경에서 동작하지 않음. (24.01.24)

- [관련 디스커션#521](https://github.com/amannn/next-intl/issues/521)
- [관련 디스커션#255](https://github.com/amannn/next-intl/issues/255)
- [관련 디스커션#642](https://github.com/amannn/next-intl/issues/642#issuecomment-1816537858)
- next@14.0.4-canary.34 + next-intl@3.4.1로 빌드파일에서 인터셉트 되는 것 확인. 병렬 페이징은 되지 않음.
- 빌드파일 실행환경과 배포환경이 다름 (01.24)
- [...rest]를 제거하면 개발모드에서만 정상 동작.

> SEO와 성능 개선 작업 (23.10.11)

초기 제작했던 페이지는 초기 렌더링(FCP)이 2.5초, 레이아웃 불안정(CLS) 지수가 0.6이었고 검색엔진 최적화(SEO) 지수가 68로 매우 낮아 노출 빈도에 취약한 상태였습니다. 성능을 올리기 위한 5개 성능 지표를 분석 후 개선 방법을 정리하여 적용했고, 사용 경험이 좋은 UI/UX를 제공하고자 대표 웹 사이트 3곳을 분석했습니다.

성능 측면에서 이미지 크기를 모두 30KB 이내로 2배 이상 압축하였고 크기와 비율을 고정해 레이아웃 변동 가능성을 차단했습니다. 또한 이미지 설명과 사이트맵, 페이지별 메타데이터를 추가했으며 GIF와 같은 큰 이미지에 대한 로딩 상황 피드백을 제공했습니다. 렌더링 측면에서 레이아웃을 서버 사이드에서 프리렌더링하도록 변경하여 페이지가 로드되는 시간을 단축했습니다. 사용 경험 측면에서 통일된 폰트와 구분된 크기, 한정된 색상 적용으로 일관된 시각 경험을 제공하여 혼란을 최소화했고 트랜지션을 활용해 사용자의 움직임에 따른 즉각적 피드백을 만들었습니다.

그 결과 5개 성능 지표의 평균 지수가 67에서 96으로 향상했고 FCP와 CLS, SEO를 각각 0.6초, 0.005, 100으로 개선할 수 있었습니다.

### Version Release

- [latest](https://github.com/yjglab/nebaram/releases/tag/0.5)

### 레퍼런스 참고

- [BFCache, 최적화 방법](https://web.dev/bfcache/)
- [TS, Index Signature](https://dev.to/keento0809/index-signature-in-typescript-37g1)
- [Cumulative Layout Shift](https://nextjs.org/learn/seo/web-performance/cls)
- [manifest 작성 리스트](https://365kim.tistory.com/169)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components)

![image](https://github.com/yjglab/nebaram/assets/70316567/5bc77120-ce07-4052-9db3-460c082852b1)
