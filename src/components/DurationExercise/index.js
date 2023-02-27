import { useCallback, useEffect, useState } from 'react'
import RunningExercise from '../RunningExercise'
let currentTimer = 0

//code from instructors video with their permission
export default function StopWatch({exerciseId, exerciseName}) {
  let [running, setRunning] = useState(false)
  let [timer, setTimer] = useState(0)

  let updateTimer = useCallback(() => {
    if(running) {
      setTimer((timer) => timer + 10)
    }
  }, [running])
  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10)
    return () => clearInterval(currentTimer)
  }, [running])
  let startStop = useCallback(() => {
    setRunning(!running)
    clearInterval(currentTimer)
    
  }, [running])


  let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
  let secs = (Math.floor((timer / 1000) % 60 )).toString().padStart(2, "0")
  let mills = (timer % 1000).toString().padStart(3, "0")
  
  return <div id={exerciseId}>
      <h1 style={{fontSize: `35px`}}>{exerciseName}</h1>
    <p style={{fontSize: `60px`}}>{mins}:{secs}.{mills}</p>
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
    onClick ={startStop}>
      {running ? "Pause" : "Start"}
    </button>
    <button style= {{
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
    onClick={() => {
      setRunning(false)
      clearInterval(currentTimer)
      setTimer(0)
    }}>Reset</button>
    <RunningExercise timer = {`${mins}:${secs}.${mills}`}> </RunningExercise>
  </div>
}