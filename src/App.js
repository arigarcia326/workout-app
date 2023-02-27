import { useState } from 'react';
import './App.css';
import StopWatch from './components/DurationExercise';
import Counter from './components/RepetitionExercise'


let exerciseData = 
[
  {
    exerciseId: 1,
    exerciseName: "Push Ups"
  },
  {
    exerciseId: 2,
    exerciseName: "Running"
  },
  {
    exerciseId: 3, 
    exerciseName: "Biking"
  }
]
//referenced some of the code from class
const LIST_STATE = 'menu'
const REPETITION_ITEM = 'repetition'
const DURATION_ITEM = 'duration'

function App() {
  let [curScreen, setCurScreen] = useState(LIST_STATE)
  let [curRepetitionItemId, setCurRepetitionItemId] = useState(1)
  let [curDurationItemId, setCurDurationItemId] = useState(2, 3)
 
  let screen
  let curRepetitionItem = exerciseData.find(item => item.exerciseId === curRepetitionItemId)
  let curDurationItem = exerciseData.find(item => item.exerciseId === curDurationItemId)

  if (curScreen === LIST_STATE) {
    screen = <>
      <h3 style= {{fontSize: `35px`}}>Let's get Moving</h3>
      <p style = {{fontSize: `20px`}}>What will you do today?</p>
      {exerciseData.map( (menu) => <>
        <br/>
        <button style={{
        backgroundColor: `#D93B92`, 
        padding: `10px`, 
        border: `none`, 
        fontSize: `25px`,
        color: `white`, 
        width: `200px`, 
        height:`100px`,
        margin: `10px`,
        borderRadius: `8px`
      }} 
        onClick={() => {
          if(menu.exerciseName === 'Push Ups') {
          setCurScreen(REPETITION_ITEM)
          setCurRepetitionItemId(menu.exerciseId)
          } else if (menu.exerciseName === 'Running' || 'Biking') {
            setCurScreen(DURATION_ITEM)
            setCurDurationItemId(menu.exerciseId)
          }   
        }}>{menu.exerciseName}</button>
      </>)}
    </>
  } else if (curScreen === REPETITION_ITEM) {
    screen = <>
      <Counter key={curRepetitionItem} {...curRepetitionItem}></Counter>
    </>
  } else if (curScreen === DURATION_ITEM) {
    screen = <>
      <StopWatch key={curDurationItem} {...curDurationItem}></StopWatch>
    </>
  } 
  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;

