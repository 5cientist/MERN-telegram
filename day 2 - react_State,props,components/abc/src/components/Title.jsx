/* eslint-disable react/prop-types */



export const Title = ({userName , onIncrement}) => {
  return (
    <div>
        <h1>welcome {userName} </h1>
        <button onClick={onIncrement}>header</button>
    </div>
  )
}
