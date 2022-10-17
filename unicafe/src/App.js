import { useState } from 'react'

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const average = props.average
  const positive = (props.positive + " %") 
  const all = props.all
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <table>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
      </table>
    </div>
  )

}

const StatisticLine = (props) => {
  return(
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
  )
 

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const handleClickGood = (newValue) => () => {
    console.log("clicked")
    setGood(newValue)
    setAll(all + 1)

  }
  const handleClickNeutral = (newValue)=> () => {
    console.log("clicked")
    setNeutral(newValue)
    setAll(all + 1)
  }
  const handleClickBad = (newValue) => () => {
    console.log("clicked")
    setBad(newValue)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <p>
        <button onClick={handleClickGood(good + 1)}>good</button>
        <button onClick={handleClickNeutral(neutral + 1)}>neutral</button>
        <button onClick={handleClickBad(bad + 1)}>bad</button>
      </p>
      <h1>statistics</h1>
      <p>
        <Statistics good ={good} neutral ={neutral} bad = {bad} positive = {(parseFloat(good/all)*100).toFixed(1)} average = {(good*1 + neutral*0 + bad*-1)/all} all = {all} />
      </p>
      
    </div>
  )
}

export default App