import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const [count, SetCount] = useState(0);
  // console.log(count);

  const OnIncrement = () => {
    SetCount((prev) => prev + 1);
  };
  const OnDecrement = () => {
    SetCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="App">
        
        <Counter
          count={count}
          OnIncrement={OnIncrement}
          OnDecrement={OnDecrement}
        />
      </div>
    </>
  );
}

export default App;
