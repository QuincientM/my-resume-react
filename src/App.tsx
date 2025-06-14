import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './pages/Resume/Resume';
import Feature from './pages/Feature/Feature';
import Ecom from './pages/Ecom/Ecom';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Robot from './pages/Robot/Robot';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
    <Link to ="/">Home</Link><br/>
    <Link to ="/resume">Resume</Link><br/>
    <Link to ="/feature">Feature</Link><br/>
    <Link to ="/ecom">Ecom</Link><br/>
    <Link to ="/robot">Robot</Link>
    </nav>
    
    <Routes>
      <Route path="/"element={< Home/>}/>
      <Route path="/resume"element={< Resume/>}/>
      <Route path="/feature"element={< Feature/>}/>
      <Route path="/ecom"element={< Ecom/>}/>
      <Route path="/robot"element={<Robot/>}/>
    </Routes>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
