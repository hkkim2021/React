# React

### React 설치하는 법
1. node.js 설치
2. 터미널에서 npx create-react-app 프로젝트제목 입력 (안돼면 앞에 sudo붙여서)
3. 프로젝트가 생성됨
4. 터미널에서 npm start누르면됨
### 프로젝트 파일들 설명
1. node_modules폴더: 라이브러리 코드 보관함
2. public폴더: html, image 등 static 파일 모아놓는 곳
3. src폴더 : 여기가 소스코드 보관함. 이 중 App.js가 메인 페이지이다.
→ html을 실제 .html파일이 아닌 App.js에 작성한다. 그렇게 할 수 있는 이유는 JSX(.js파일에서 쓰는 html대용품)때문이다.
4. package.json: 프로젝트 정보 기입해 놓는곳
### JSX문법
1. class 넣을때는 class = ” “ 이 아닌 className = ”  “ 로 작성한다
2. 변수 넣을 땐(=데이터 바운딩할 때) {중괄호} 사용한다.

   
   let post = " 강남 우동 맛집 " ;

   
   document.querySelector('h4').innerHTML = post;

   
   <h4>{post}</h4>

3. style 넣을땐  ⇒ style = { { 스타일명: ‘값’ } }

   <h4 style = { { color: 'red'} }></h4>
