import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [inputType, setInputType] = useState(1)

  const changeInputType = () => {
    setInputType(!inputType);
  }

  return (
  <>
    <input type={ inputType ? 'text' : 'password' } />
    <button onClick={ changeInputType }>{ inputType ? 'hide' : 'show' }</button>
  </>
  )
}

export default App
