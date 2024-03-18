import {useState} from 'react';  //state를 사용하기 위해 추가 
import './App.css'

function App(){

    let[a,b] = useState('남자코트추천');   //a는 state 이름이고 b는 이 state의 상태를 변경시킬 수 있는 state 함수이다. state를 사용하고 싶으면 {state 이름} 쓰면된다
    let posts = '강남우동맛집';               //이렇게 그냥 변수로 사용해도 되지만 중요한 데이터는 위처럼 state를 사용하자
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            <div className="list">
                <h4>{a}</h4>               
                <p>2월 17일 발행</p>
                <hr/>
            </div>
        </div>
    )
}

// *JSX문법
// 1.class 넣을때는 className="" 사용
// 2.변수 넣을 땐(=데이터 바운딩 할때) {}중괄호 사용
// 3.style 넣을 땐 => style={{스타일명: '값'}}

//-------------------------------------------------------------------------------------------

// *참고: 자바스크립트 destructuring 문법 =array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶을때 쓰는 문법
 
// let array = ['Kim', 20];
// 일때
// let name =array[0];
// let age=array[1];
// 말고 
// let [name, age] =['Kim', 20];
// 이렇게 쓴다.

// let[글제목, b] = useState('남자코트추천');
//                   = ['남자코트추천', 함수]; 

//-------------------------------------------------------------------------------------------

let[글제목1, b1]=useState('남자코트추천');
let[글제목2, b2]=useState('강남우동맛집');
let[글제목3, b3]=useState('파이썬독학');
returnfunction App(){
	
	let[a,b] = useState('남자코트추천');
	let posts = '강남우동맛집';
	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 blog</div>
			</div>
			<div className="list">
				<h4>{a}</h4>
				<p>2월 17일 발행</p>
				<hr/>
			</div>
		</div>
	)
}

/*
useState를 사용하면 자동적으로 import {useState} from 'react';가 뜬다
let[a, b] = useState('남자 코트 추천'); 의 a자리에 state 이름을 자유롭게 작명후 사용하면 된다.
*/
-------------------------------------------------------------------------------

*참고로 위의 let 뒤의 문법은 자바스크립트 destructuring 문법인데, 내가 array 안에 있는 데이터들을 
 변수로 쉽게 저장하고 싶으면 쓰는 문법이다.

let array = ['Kim', 20];
일때
let name = array[0];
let age = array[1];
대신
let [name, age] = ['Kim', 20];이렇게 쓴다


즉 let[글제목, b] = useState('남자코트추천'); 
					  = ['남자코트추천, 함수]; 

//-------------------------------------------------------------------------------

let[글제목1, b1]=useState('남자코트추천'); 
let[글제목2, b2]=useState('강남우동맛집');
let[글제목3, b3]=useState('파이썬독학');
// let[글제목, b]=useState(['남자코트추천', '강남우동맛집', '파이썬독학']); 한줄로 위의 세줄을 바꿀수 있다. 

return (
		<div className="App">
			<div className="black-nav">
				<div>개발 blog</div>
			</div>
			<div className="list">
				<h4>{글제목1}</h4>
				<p>2월 17일 발행</p>
				<hr/>
			</div>
			<div className="list">
				<h4>{글제목2}</h4>
				<p>2월 17일 발행</p>
				<hr/>
			</div>
			<div className="list">
				<h4>{글제목3}</h4>
				<p>2월 17일 발행</p>
				<hr/>
			</div>
		</div>
	)

    //-------------------------------------------------------------------------------

    // *var, let, const 변수 말고 state에 데이터 저장해서 쓰는 이유?
    // : state 용도 자체는 변수랑 똑같지만 변수와 다르게 state는 변동사항이 생기면 state를 사용하는 html도 자동적으로 
    //   재렌더링 해주기 때문이다. 그러면 UI기능 개발도 매우 편리해지고 사이트도 스무스하게 동작할 수 있다.
     