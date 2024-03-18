//#map: 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

//1.map 함수들의 기능
//:(1) array에 들어 있는 자료갯수만큼 그 안에 있는 코드를 반복실행한다.
         var arr=[2,3,4];
         arr.map( function() {     
            console.log(1)
         });
         //=> console.log(1)이 3번 실행됨
// (2) 콜백함수에 파라미터 아무렇게나 작명하면 그 파라미터는 array안에 있던 모든 자료를 하나씩 출력해준다.
         var arr=[2,3,4];
         arr.map(function(a)){[
            console.log(a)
         ]};
         //=> 콘솔창에 2, 3, 4가 출력된다.
// (3) return 오른쪽에 뭐 적으면 array로 담아준다
         var arr=[2,3,4];
         var newArr=arr.map(function(a){
            return a*10
         });
         //=>newArr는 [20,30,40]이 된다.

//-----------------------------------------------------------------------------------------------------------------

//2.자바스크립트 map함수 쓰는 법
//: for 반복문은 JSX 중괄호 안에서 사용할 수 없어서 반복하고 싶을때 대신 map()함수를 사용한다. 모든 array 자료 우측엔 map()
// 함수를 붙일 수 있다. 리엑트 중괄호 안에 html을 반복 생성하고 싶으면 map을 이용하면 된다.
//*function(a,i){}에서 파라미터를 2개 작성할수 있는데 첫 째 파라미터 a는 해당 array안에 있던 자료, 둘째 파라미터 i는 0부터 1씩 증가하는 정수가 된다.
function App(){

    ...

   return(
      <div>
         ...
       글제목.map(function(a)){
         return(
            <div className="list">
               <h4>{a}</h4>
               <p>2월 18일 발행</p>
            </div>
         )
       }
         ...
      </div>
   )
}

//또는

function App(){

   ...

  return(
     <div>
        ...
      글제목.map(function(a,i)){    
        return(
           <div className="list" key={i}>
              <h4>{글제목[i]}</h4>
              <p>2월 18일 발행</p>
           </div>
        )
      }
        ...
     </div>
  )
}