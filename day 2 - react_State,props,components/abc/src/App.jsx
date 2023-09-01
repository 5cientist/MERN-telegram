import { useState } from "react";
import "./App.css";
import { Title } from "./components/Title";



function App() {
  // const [count,setCount]=useState(0);
  // eslint-disable-next-line no-unused-vars
  const [userName,SetUserName] = useState("Debug media");
  const [count,setCount] = useState(1);


  const onIncrement=()=>{
    setCount((value)=> value +1);
    // or
    // setCount(count + 1);
    // console.log("Clicked");
  }
  console.log(count);

  

  return <div className="App">
    <Title userName={userName} onIncrement={onIncrement}/>
   <button onClick={onIncrement}>Increment</button>
 

  </div>;
}

export default App;


