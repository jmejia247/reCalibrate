import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReCalibrate from './Components/reCalibrate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <ReCalibrate>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam modi reiciendis optio ratione ea, quaerat repellat quae quod consequatur, atque natus reprehenderit, debitis eius cumque facere explicabo deserunt consectetur.</p>
        </ReCalibrate>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores officiis similique, possimus, veniam, ex impedit porro deleniti iure accusantium perferendis voluptatum aspernatur necessitatibus? Ut fuga quas odit recusandae rerum.</p>

        <ReCalibrate>
          <div style={{width: '120px'}}>
            Another test
          </div>
        </ReCalibrate>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quisquam ab omnis. Modi iste blanditiis ratione delectus nemo molestiae recusandae debitis itaque praesentium nihil soluta assumenda, porro natus commodi non.</p>
        <ReCalibrate>
          <button >
            Click me
          </button>
        </ReCalibrate>
      </div>
    </>
  )
}

export default App
