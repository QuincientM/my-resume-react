import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './pages/Resume/Resume';
import Feature from './pages/Feature/Feature';
import Ecom from './pages/Ecom/Ecom';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Header from './components/Header/Header';
import Login from './pages/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>
    
    <Routes>
      <Route path="/"element={< Home/>}/>
      <Route path="/resume"element={< Resume/>}/>
      <Route path="/feature"element={< Feature/>}/>
      <Route path="/ecom"element={< Ecom/>}/>

      <Route path="/login" element={<Login />} />
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
