import { useState } from 'react'


export default function RunningExercise({ timer }) {
  const [laps, setlaps] = useState([])

  const handleLap = () => {
    setlaps([...laps, timer])
  }

  return (
    <div>
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
      onClick={handleLap}>Lap</button>
      <ul style={{ listStyleType: `none`, fontSize: `40px`}}>
        {laps.map((lap,index) => (
          <li key = {index}>Lap {index + 1} : {lap}</li>
        ))}
      </ul>
    </div>
  )
} 