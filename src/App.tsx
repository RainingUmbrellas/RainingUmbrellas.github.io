import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='banner'></div>
      <nav></nav>
      <div>
        <main></main>
        <aside>Bio</aside>
      </div>
      <footer></footer>
    </>
  )
}

export default App
