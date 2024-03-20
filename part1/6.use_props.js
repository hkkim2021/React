//#자식이 부모의 state를 가져다쓰고 싶을 때는 props 사용한다,.
//:자바스크립트에서는 다른 함수에 있는 변수를 마음대로 가져다 쓸 수 없다. 다른 함수에 있는 state변수가 또 다른 함수에는 없기 때문이다.
// 근데 컴포넌트 2개가 부모/자식 관계인 경우엔 가능하다.(다른 컴포넌트 안에 있는 컴포넌트를 자식컴포넌트라고 부른다.)
// 즉 부모 컴포넌트의 state를 자식 컴포넌트로 전송해 줄 수 있고, 자식도 사용가능 정송이엔 props라는 문법을 사용한다.

//1.props로 부모 -> 자식 state 전송하는 법
//: (1) 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 작명 = (state이름)/>
//  (2) 자식컴포넌트 만드는 function으로 가서 props라는 파라미터를 등록 후 props 작명 사용

function App(){
    let [글제목, 글제목변경]=useState(['남자코트추천', '강남우동맛집', '파이썬독학']);

    return(
        <div>
            <Modal 글제목={글제목}></Modal>
        </div>
    )
}

funtion Modal(props){
    return(
        <div className="modal">
            <h4>{props.글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

//------------------------------------------------------------------------------------------------------------------------

//*참고*
//: (1) props는 <Modal 제목1={내용1} 제목2={내용2} 제목3={내용3}...> 이렇게 여러개 무한개 전송이 가능하다.
//: (2) 꼭 state만 전송할 수 있는게 아니다. <Modal 글제목={변수명}> 같이 일반변수, 함수 전송도 가능하고, 
//       <Modal 글제목="강남우동맛집"> 같이 일반 문자전송은 중괄호 없이 보낼 수 있다.
//: (3) 단 props는 자식->부모 방향으로는 전송 불가능!!!!
//: (4) 또한 자식끼리 옆진 컴포넌트로의 불륜전송도 불가능!!!!

function Modal(props){
    return(
        <div className="modal" style={{background: 'skyblue'}}>
            <h4>{props.글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

// 아예 background 색을 props를 사용해 컴포넌트를 이용해서 필요할때마다 다른 색 모달창도 간단히 만들수 있게 할 수 있다.

function App (){
    let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    return (
      <div>
        <Modal 글제목={글제목} color={'skyblue'}></Modal>
              <Modal 글제목={글제목} color={'yellow'}></Modal>
      </div>
    )
  }

  function Modal(props){
    return(
        <div className="modal" style={{background: props.color}}>
            <h4>{props.글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
  }

  //------------------------------------------------------------------------------------------------------------------------
  //*과제답
  /*eslint-disable */
  import logo from './logo.svg';
  import './App.css';
  import {useState} from 'react';

  function App(){

    let name='ReactBlog';
    let [글제목, 글제목변경]=useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
    let [따봉, 따봉변경]=useState([0,0,0]);
    let [modal, setModal]=useState(false);

    return(
        <div calssName="App">
            <div clssName="black-nav">
                <h4>{ name }</h4>
            </div>
            {
                글제목.map(function(a,i){
                    return(
                        <div className="list" key={i}>
                            <h4 onClick={()=>{setModal(true)}}>{글제목[i]}
                                <span onClick={()=>{
                                    let copy=[...따봉];
                                    copy[i]=copy[i]+1;
                                    따봉변경(copy);
                                }}>👍
                                </span>{따봉[i]}
                            </h4>
                            <p>2월 19일 발행</p>
                        </div>
                    )
                })
            }

            {
                modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/> : null
            }
        </div>
    )
  }

  function Modal(props){
    return(
        <div className="modal">
            <h4>{props.글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                const copy=[...props.글제목];
                copy[0]='여자코트추천'
                props.글제목변경(copy);
            }}>
                글수정
            </button>
        </div>
    )
  }

  export default App;
