# EXPRESS psychotest ON VSCODE

## TODO

-   시작 페이지 제작
    ✔️ 이미지 구입해서 넣기 (힘좀 주기)
-   문제 페이지
    ✔️ 이지선다 문제로 될 수 있게 만들기
    ✔️ 문제를 API로 불러오기 (SEO에 읽힘)
    ✔️ 화면 업데이트마다 애니메이션이 재생되는 문제
-   결과 페이지 제작
    ✔️ 공유넣을 수 있는 부분 넣기 (페이스북, 인스타그램(앱에서만가능 / 이미지 다운로드로 변경), 트위터, 링크복사)
    ⏱️ (추후) 공유 API가 지원이 되는 브라우저라면 그냥 공유 버튼 하나로 퉁치기
    ✔️ 이미지로 저장 (인스타그램 포스트/스토리)
    ✔️ 이미지 + 그라디언트 넣기
-   배포
    ✔️ 배포
    ✔️ 도메인
-   sentry
    ✔️ 프론트엔드
    -   백엔드
-   구글 애널리틱스
    ✔️ 적용
-   SSL적용
    ✔️ nginx 세팅 (http to https)
-   애드센스 적용
    -   아직 조건 충족이 되지 않음
-   SEO 적용
    ✔️ favicon 적용
    ✔️ robots.txt
-   본격적인 서비스
    ✔️ Responsible CSS 적용하기
    ✔️ 공유 (인스타그램 사진 / 페이스북 공유 / 트위터 공유 / 왓츠앱 공유)
    -   구글 웹마스터도구
        > 색인 생성하려면 piwimi.id 를 중심으로 해야해서 이걸 결국 만들어야됨
    -   인스타그램/틱톡 광고 (10만원씩)
    -   직접 하는 영상 올리기 태그와 함께
    -   테스트 목록 작성
        -   내가 키보드 두들기는 영상(?) gif(?) 넣기 / JPG 여러장으로 셀프 gif제작
    -   회사 정보 작성
    -   404 페이지 제작
-   뒤로가기 막기
-   틱톡용 비디오로 촬영해서 자기 얼굴을 보면서 하는 테스트가 있음 좋을것같은데.. (필터땜시)

## Install

    $ git clone https://github.com/dorage/nodepsychotest.git
    $ cd nodepsychotest
    $ npm install

## Configure app

.gitignore 에 .env.development를 추가해주세요.

    $ npm i

## Running the project

NODE_ENV = 'development' 으로 실행됩니다.

    $ npm start

NODE_ENV = 'production' 으로 실행됩니다.

    .env.production 이 있어야합니다.
    $ npm run production
