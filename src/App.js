
import './App.css';
import {useState} from "react";

function App() {
  // object 를 이용해서 상태관리 하기
  const [state, setState] = useState({
    name:"김구라",
    age:20
  });

  return(
      <div className="container">
        <h1>인덱스 페이지 입니다.</h1>
        <input type="text" value={state.name}/>
        <input type="text" value={state.age}/>
        <p>{` 이름은 ${state.name}`}</p>
        <p>{` 나이는 ${state.age}`}</p>
      </div>
  );

}

// import 한 곳에 무엇을 리턴해줄지 결정하기
export default App;
