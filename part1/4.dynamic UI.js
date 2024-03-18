//#리엑트에서 동적인 UI만들기(모달창 만들기)

//1.동적인 UI만드는 step
//: (1)html css로 미리 UI 디자인을 다 해 놓고
//  (2)UI의 현재 상태를 state로 저장해두고
//  (3)state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성 => 조건식 ? (조건식 참일때 실행 코드 ) : (조건식 거짓일때 실행 코드)

function App(){

    let[글제목, 글제목변경]=useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
    let[modal, setModal]=useState(false);

    return(
        
        modal == true ? <Modal></Modal> : null

    )
   
}

//-----------------------------------------------------------------------------------------------------------------

//2. 글제목 누르면 모달창이 계속 열렸다 닫혔다 하게 하기

function App(){

    let[글제목, 글제목변경]=useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
    let[modal, setModal]=useState(false);

    return(
        <div>
            ...
            <button onClick={ ()=>setModal(!modal)}>{글제목[0]}</button>
            ...
            {
                modal == true ? <Modal></Modal> : ' '
            }
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

 function App(){

    let[글제목, 글제목변경]=useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
    let[modal, setModal]=useState(false);

    return(
        <div>
            ...
            <button onClick={ ()=> {modal==true ? setModal(false) : setModal(true)} } >{글제목[0]}</button>
            ...
            {
                modal == true ? <Modal></Modal> : ' '
            }
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