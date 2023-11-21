import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const data = ["hello", "world"];
  const resultData = `${data[0].charAt(0).toUpperCase()}${data[0].slice(1)} ${data[1].charAt(0).toUpperCase()}${data[1].slice(1)}`;
  console.log(resultData);

  const number1 = 5;
  const number2 = 6;
  const result = number1 + number2;

  const string = "I love React!"
  const len = string.length;



  return (
    <div>
      <section id='stringMan' className='sec'>
        <h1>{resultData}</h1>
      </section>

      <section id='num' className='sec'>
        <h1>{number1} + {number2} = {result}</h1>
      </section>

      <section className='sec'>
        <h1>{len}</h1>

      </section>




    </div>
  )
}

export default App
