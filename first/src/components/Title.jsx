export const Title = ({ userName, onIncrement }) => {
  return (
    <div>
      <h1>Welcome back , {userName} </h1>
      <button onClick={onIncrement}>Click from header</button>
    </div>
  );
};


//1:19:54