## 개인 프로젝트

### 주식을 예상, 기록해보는 STOCK DIARY

## 프로젝트 요약

### 📆 기간

#### 22년 12월 05일 ~ 22년 12월 16일

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"/>   
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>  
   <img src="https://img.shields.io/badge/react_recoil-3DDC84?style=for-the-badge&logo=react-recoil-async&logoColor=white"/> 
</div>
<br/>

### 🔧 사용 라이브러리
- axios
- react-spinners
- recharts
- styled-reset
- react-icons
- http-proxy-middleware

<br>

### Back-End
firebase 로 구현

<br>

### 배포 링크

[배포링크 바로가기](https://master--stock-diary.netlify.app/)

<br/>

### 파일구조
<details>
<summary> 구조</summary>
<div markdown="1">

```
🗂 src
 ┣ 📁 components
   ┣ Error404.tsx
   ┣ Header.tsx
   ┣ Layout.tsx
   ┣ Loading.tsx
   ┣ SearchBar.tsx
   ┗ SideBar.tsx
 ┣ 📁 pages
   ┣ 📁 auth
     ┣ Login.tsx
     ┗ Sign.tsx
   ┣ 📁 main
     ┣ 📁 mainCapital.tsx
       ┣ MainCapital.tsx
       ┗ MainChart.tsx
     ┣ Main.tsx
     ┣ MainCalc.tsx
     ┗ MainList.tsx
   ┣ StockList.tsx
   ┗ StockNews.tsx
 ┣ 📁 recoil
   ┗ atom.ts
 ┣ 📁 service
   ┣ 📁 axios
     ┣ AxiosApi.ts
   ┣ 📁 firebase
     ┣ fbAuth.ts
     ┗ fbInit.ts
   ┗ getStore.ts
 ┣ 📂 utils
   ┣ convert.ts
   ┣ inlineStyle.ts
   ┗ regExp.ts
 ┣ 📂 types
   ┗ interface.ts
 ┣ index.tsx
 ┗ router.tsx
```

</div>
</details>

<br>

### 기능

## Auth
- 회원가입  
이메일: 이메일형식, 비밀번호: 8자리 이상의 영어소문자 + 숫자 조합으로 입력하시고
모든 입력창을 채우시면 가입 버튼이 활성화 되어서 가입이 가능합니다.
- 로그인  
 가입한 ID, Password로 로그인 할 수 있습니다.(enter 로그인 가능)
 
 <hr/>

## 페이지 공통
페이지 공통으로 상단에 Header가 존재합니다.
Header에는 회원가입시 기입한 이름이 출력됩니다.
이름 옆에는 로그아웃 버튼이 존재합니다.
탭을 나가지 않으시면 로그인은 유지됩니다.
탭을 나가시거나 로그아웃 버튼을 누르시면 로그아웃이 됩니다.
왼쪽에는 페이지별로 이동하실 수 있도록 Navigation Bar가 존재합니다

<hr/>

## 내 주식정보  
중앙 왼쪽부분에는 내가 매매한 주식의 누적 구매액과 누적 판매액이 그래프로 출력됩니다.
중앙 오른쪽에는 주식명 검색창, 주식 간단 설명, 매매창이 존재합니다.
주식명을 정확히 아시면 정확한 주식명 + Enter 키, 잘 모르신다면 추천검색어에서 골라서 클릭하시면 됩니다.
가격란에는 해당 주식 오늘의 고가와 저가 사이의 값만 입력이 가능합니다.

<hr/>

## 자산정보  
내가 구매한 주식들의 정보를 테이블 형식으로 출력합니다.
종목명, 누적매수량, 누적매도량, 최근 판매가격, 평균 구매단가, 예상 수익률, 현재 수익 순으로 출력됩니다.
리스트가 많아질 것을 대비하여 맨 위쪽 분류 라인은 따라 내려옵니다.
예상 수익률과 현재 수익 부분에 마우스를 올리시면 해당 값의 음,양을 색으로 표시해서 가독성을 올려줍니다.

<hr/>

## 주식 상세정보  
중앙에 있는 검색창에 주식명을 입력하시면 주식의 상세 정보가 출력됩니다.
자산 정보에서 보지 못하는 거래량, 시가 총액등을 확인 하실 수 있습니다.
내 주식정보에 있는 검색창과 연결이 되어있어서 검색하신 값들 돌아가며 확인 하실 수 있습니다.

<hr/>

## 최신 뉴스
로딩상태일때는 팩맨 로딩화면이 출력됩니다.
중앙에 있는 검색창에 뉴스 제목을 입력하시면 관련 뉴스가 검색됩니다.
첫 화면은 '주식'을 검색한 결과이며 새로고침시 실시간으로 변경됩니다.
토글형식으로 누르면 조금의 기사 내용과 함께 기사를 보러가는 링크가 출력됩니다.

<hr/>

### 추가예정
- 증권사 별 데이터
- 실제 증권사 계정과 연동
- websocket으로 완전 실시간 데이터 송수신
