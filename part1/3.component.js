// #Component: 많은 div들을 한 단어로 줄이고 싶다면
//1. html코드 짤 때 유의할점. fragment 문법
//   : return() 안에 두개의 html태그를 나란히 적으면 안된다. 반드시 하나의 태그로 시작해서 하나의 태그로 끝내야 한다!!!

return(                             //이렇게 짜면 절대 안됨!
    <div></div>
    <div></div>
)

return(                            //굳이 <div>태그 두개를 나란히 적고 싶으면 하나의 div로 감싸줘야 한다.
    <div>       
        <div></div>
        <div></div>
    </div>
)

return(                            //또는 의미없는 div쓰기 싫다면 <></>를 대신 써도 된다.
    <>
        <div></div>
        <div></div>
    </>
)

//-----------------------------------------------------------------------------------------------------------------

//2.복잡한 html을 한 단어로 치환할 수 있는 Component 문법
 //  : (1) function을 이용해서 함수를 하나 만들어주고 작명한다.
 //  : (2)그 함수 안의 return() 안에 축약을 원하는 HTML을 담으면 된다.
 //  : (3)그럼 원하는 곳에 <함수명></함수명> 또는 </함수명>을 사용하면 아까 축약한 HTML이 등장한다.

 function App(){

    let name='김현경의 홈페이지';
    let[제목,제목변경]=useState(['남자코트추천','강남우동맛집','파이썬독학']);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{name}</h4>
            </div>
            <div className="list">
                <h4>{제목[0]} <span onClick={ ()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
                
                <modal></modal>             //또는 그냥 </modal>이라고 적어도 된다.

        </div>
    )
 }

 function Modal(){
    return(
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <h4>상세내용</h4>
        </div>
    )
 }

 //또는 

 const Modal= ()=>{
    return(
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <h4>상세내용</h4>
        </div>
    )
 }

 //또는
 
 const Modal = function() {
    return(
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <h4>상세내용</h4>
        </div>
    )
 }

 //-----------------------------------------------------------------------------------------------------------------

 //*component 단점
 //:일단 HTML을 깔끔하게 쓸려고 component를 수백개 만들면 그것만으로 관리가 힘듬. 예를들어 function Modal 안에 글제목 
 //  state를 쓰고 싶어서 { 글제목 }이렇게 쓰면 안된다. 왜냐하면 한 function안에 있는 변수를 다른 function에서 맘대로 쓸 수 
 //  없기 때문이다. props라는 문법을 이용해 state를 <Modal> function까지 전해줘야 비로서 사용가능하다.  
 //  즉 state가져다 쓸 때 문제가 생긴다.