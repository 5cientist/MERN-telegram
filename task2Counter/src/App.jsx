import { useState } from "react";

import "./App.css";
import { Counter}  from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  

  const OnIncrement = () => {
    setCount((prev)=>{
      if(count >= 10) return prev;
      return prev + 1

    })
  }

  const OnDecrement = () => {
    setCount((prev) =>{
      if(prev <= 0) return prev;
      return prev - 1
    });
  };
   

  

  return (
    <>
      <Counter
        count={count}
        OnIncrement={OnIncrement}
        OnDecrement={OnDecrement}
      />
    </>
  );
}

export default App;
