# Nebaram 0.0.0 새 바람을 실현할 첫 도약

![image](https://github.com/yjglab/nebaram/assets/70316567/7978c884-4f37-43ce-b196-520efe285ba4)

### 개요

- 네바람은 웹 개발자로서 네 가지 역량을 갖춘 저를 표현하는 퍼스널 브랜드입니다. 네바람을 통해서 저는 어떤 목표를 가진 개발자인지, 어떤 프로젝트를 진행했었고 어떤 강점들이 있는 지를 알리고 싶어 제작되었습니다. [https://nebaram.vercel.app](https://nebaram.vercel.app "nebaram")
- 이 프로젝트는 기존 개인 포트폴리오 사이트를 NextJS로 이전하며 리뉴얼한 사이트입니다. 이전 사이트를 보시려면 [여기](https://yukjaekyeong.web.app)를 방문해주세요.
- Nebaram Introduction(Root) 페이지는 현재 제작중입니다. 개발자 페이지(/owner)와 프로젝트 페이지(/projects)만 열람할 수 있습니다.

<br />

### 구현부 요약

- 기존의 개인 포트폴리오 웹 페이지를 Next@13 으로 이주하여 디자인과 코드 리뉴얼
- 사용자 뷰포트의 스크롤에 따라 적용되는 애니메이션 효과 구현
- 다국어 메타 데이터와 라우팅, JSON 번역 파일을 제공하여 다국어 SEO 향상
- Apple HIG(Human Interface Guideline)를 반영한 반응형 웹 퍼블리싱

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

![owner-1](https://github.com/yjglab/nebaram/assets/70316567/b84eb738-49f5-49c4-ad02-bc1dfced6149)

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

![intl-1](https://github.com/yjglab/nebaram/assets/70316567/97621348-7a7d-4a3d-bc1d-f91a0c1ae9df)

<br />

#### 반응형 스크린

> 반응형 페이지 지원

- 네바람 웹 페이지는 어떤 크기의 화면도 상관없이 맞춤으로 동작하는 반응형 페이지로 구현되었습니다.

![responsive](https://github.com/yjglab/nebaram/assets/70316567/afe50c82-d7cf-477b-b2fd-4187106b8939)

<br />

### 이슈

> 특정 문자열에만 다른 스타일을 적용한 JSON 데이터

- 핵심 키워드, 헤더 등 강조하고 싶은 문장에만 특정 스타일을 넣는 방식은 가장 많이 사용되는 다국어 기능 라이브러리인 i18n-next에서는 불가능함 (Ex. "\<h1\>헤더\</h1\>나머지 텍스트")
- 최신 라이브러리인 next-intl로 변경, 태그 번역을 지원하는 메서드를 적용하여 해결

Version Release

- [Nebaram 0.0.0](https://github.com/yjglab/nebaram/releases/tag/0.0.0 "Release 0.0.0")

![image](https://github.com/yjglab/nebaram/assets/70316567/5bc77120-ce07-4052-9db3-460c082852b1)
