//버튼에 기능 개발을 한후 리엑트 state를 변경해보자

//1.좋아요 버튼 & onClick 사용
// *onClick사용 in JSX 
// : <div onClick={실행할 함수}></div>
// 그냥 코드가 아니라 함수를 넣어야 잘 동작한다.

function App() {
    let[따봉, 따봉변경] = useState(0);            //state는 state변경함수를 사용해서 state를 변경해야 html 재렌더링이 된다.
    let[글제목,글제목변경]=usState(['남자코트추천','강남우동맛집','파이썬독학']);

    return (
        <h4>{글제목[0]}<span>👍</span>따봉</h4>  //여기서 '따봉변경'이라는 state 변경함수를 통해 state을 변경해보자

        <h4>{글제목[0]}<span onClick={ ()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>         //함수 사용방법1

        <h4>{글제목[0]}<span onClick={ functiojn() {따봉변경(따봉+1)}}>👍</span>{따봉}</h4>  //함수 사용방법2
    )
}