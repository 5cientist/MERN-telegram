export const Counter = ({ count, OnIncrement, OnDecrement }) => {
  console.log(count, "==count");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={OnIncrement}>increment</button>
      <button onClick={OnDecrement}>decrement</button>
    </div>
  );
};
