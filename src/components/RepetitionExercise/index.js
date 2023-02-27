import { useState } from 'react'

//referenced code from youtube video by Web Dev Simplified
export default function Counter ({exerciseId, exerciseName}) {
  const [count, setCount] = useState(0)

//decrease the count without letting it go into negative numbers
  function decreaseCount() {
    setCount(prevCount => prevCount.count? prevCount.count - 1: 0)
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <div id={exerciseId}>
      <h1 style={{fontSize: `35px`}}>{exerciseName}</h1>
      <button style={{
        background:`none`,
        borderStyle: `none`,
        fontSize: `70px`
      }}
      onClick={decreaseCount}>-</button>
      <span style={{fontSize: `60px`}}>{count}</span>
      <button style={{
        background:`none`,
        borderStyle: `none`,
        fontSize: `55px`
      }}
      onClick={increaseCount}>+</button>
      <br/>
      <button style={{
        backgroundColor: `#D93B92`, 
        padding: `10px`, 
        border: `none`, 
        fontSize: `15px`,
        color: `white`, 
        width: `100px`, 
        height:`50px`,
        margin: `10px`,
        borderRadius: `8px`
      }}
      onClick ={() => {
        setCount(0)
      }}>Reset</button>
      </div>
    </>
  )
}