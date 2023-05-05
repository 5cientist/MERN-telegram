import { Fragment, useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";

function App() {
  const [userName, setUserName] = useState("Debug media");

  // const [count,setCount] = useState(0);
  const onIncrement = () => {
    // console.log("Click");
    // setCount((prev)=> prev +1);
    // setCount((prev)=> prev +1);
    // setCount((prev)=> prev +1);
    // setCount(count+1);
    //! async problem will not  come
    // so we have to use updater function (prev)
    // user Fragment or <>  </>
  };

  useEffect(() => {
    //api
    // set update
    // language set 
    // dark/light
    // console.log("okay");
    setUserName("Hanshir");
  }, []);

  return (
    <Fragment>
      <div className="App">
        <Title userName={userName} onIncrement={onIncrement} />
        <button onClick={onIncrement}>Increment</button>
      </div>
    </Fragment>
  );
}

export default App;
