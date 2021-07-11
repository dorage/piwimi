# EXPRESS psychotest ON VSCODE

## TODO

-   시작 페이지 제작
    ✔️ 이미지 구입해서 넣기 (힘좀 주기)
-   문제 페이지
    ✔️ 이지선다 문제로 될 수 있게 만들기
    ✔️ 문제를 API로 불러오기 (SEO에 읽힘)
    ✔️ 화면 업데이트마다 애니메이션이 재생되는 문제
-   결과 페이지 제작
    -   공유넣을 수 있는 부분 넣기 (페이스북, 인스타그램(앱에서만가능 / 이미지 다운로드로 변경), 트위터, 링크복사)
    -   공유 API가 지원이 되는 브라우저라면 그냥 공유 버튼 하나로 퉁치기
    -   이미지로 저장 (인스타그램 포스트/스토리)
    -   이미지 + 그라디언트 넣기
-   배포
-   도메인
    ✔️ 구입
    ✔️ 적용
-   sentry
    ✔️ 프론트엔드
    -   백엔드
-   구글 애널리틱스
    ✔️ 적용
-   SSL적용
    ✔️ nginx 세팅 (http to https)
-   애드센스 적용
-   SEO 적용
-   favicon 적용
-   robots.txt
-   sitemap.xml
-   인스타그램/틱톡 광고 (10만원씩)
-   직접 하는 영상 올리기 태그와 함께
-   Febby 한테 번역 부탁하기

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
