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


//2.array, object state 변경하는 법
//: state가 array/object면 독립적 카피본을 만들어서 수정해야 된다

function  App() {
    let [글제목, 글제목변경] = useState(['남자코트추천','강남우동맛짐','파이썬독학']);

    return(
        <button onClick={ ()=>{
            let copy = 글제목;
            글제목[0] = '여자코트 추천';    //이렇게 하면 과연 바뀔까? -> 아니다!!!
            글제목변경(copy)
        } }> 수정버튼
        </button>
    )
}
//  why? => state 변경함수를 쓸 때 기존 state == 신규 state인지를 먼저 검사한다. 그래서 같으면 state 변경을 해주지 않는다.
//               그래서 위 코드에서도 글제목변경(copy)해도 copy라는 변수가 기존 state과 같아서(사실 같은걸 가리키고있어서!) 변경을 안해준다.
//               copy에는 '남자코트추천' 대신 '여자코트추천'이 들어가 있음에도 글제목==copy 가 True 라고 나온다.
// how? => 그럼 어떻게 고쳐야 할까? 바로 ...을 사용한다. 이 점 3개는 spread operator라고 하는 문법인데, array나 object 자료형 왼쪽에 
//               부일 수 있으며, 뜻은 별거없고 '괄호를 벗겨주세요'라는 뜻이다.

function  App() {
    let [글제목, 글제목변경] = useState(['남자코트추천','강남우동맛짐','파이썬독학']);

    return(
        <button onClick={ ()=>{
            let copy = [...글제목];
            글제목[0] = '여자코트 추천';    
            글제목변경(copy)
        } }> 수정버튼
        </button>
    )
}