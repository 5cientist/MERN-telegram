export const Counter = ({ count, OnIncrement, OnDecrement }) => {
  
  return (
    <>
      <div>
        <h1>Welcome, {count}</h1>
        <button onClick={OnIncrement}>Click +</button>
        <button onClick={OnDecrement}>Click -</button>
      </div>
    </>
  );
};


