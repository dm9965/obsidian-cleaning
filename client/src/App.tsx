import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <p className={"tw-text-2xl tw-text-amber-400 tw-font-bold"}>
            Hello Ryan
        </p>
    </>
  )
}

export default App
