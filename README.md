# 실습 완료 후 템플릿 (Google Firebase 배포)
https://disney-plus-app-61c80.web.app/main

---

# 디즈니 플러스 앱 실습

## 개요
    디즈니 플러스 앱을 실제로 만들어 보며 리엑트 핵심기술을 습득
## 주요 실습내용
    * APIKey 생성 및 디즈니 백엔드 API 호출 후 가져오기
    * Axios 라이브러리 사용하여 Back-End API 연결
    * await 구문 활용하여 비동기 API 처리
    * Styled Component 사용하여 컴포넌트 구성 (별도 install 필요)
      - 상속 및 스타일 내부에 Props 활용
    * React Route Dom 사용하여 컴포넌트 이동 제어 (별도 install 필요)
    * Swiper 모듈사용하여 슬라이드 처리
    * Google Firebase를 이용한 뒷단(인증, 백엔드, 모듈, 분석(애널리틱스) 등) 앱 구조 설계
      - 로그인 시 인증관련 모듈 진행
      - Firebsae CLI 를 이용하여 배포 관리
    * LocalStorage 사용하여 새로고침 시에 로그인 정보가 유지되도록 고정
## 보완 및 개선필요 사항
    * 메인 오늘의 영화 영상 띄워주는 로직 개선 필요
      - 버튼 클릭 대신 마우스 들어가서 3초뒤에 자동재생, 포커스 벗어나면 다시 토글
      - 영상 Iframe 사이즈 조절 필요.
      - 이미지 부분도 Ridius 조정, 모바일일때 폰트 조정필요함.
    * 중복되는 컴포넌트 처리가 안되어있음.
    * 디자인작업이 깔끔하지 못함
    * 코딩 가독성이 너무 떨어지게 스타일지정 되어있음.
    * 반응형 웹 페이지 구현이 안되어있음
## 관련링크
    * The Movie DB : https://www.themoviedb.org/
    * Fireabse : https://firebase.google.com/?hl=ko
