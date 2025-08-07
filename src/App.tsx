
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Resume from './pages/Resume/Resume';
import Feature from './pages/Features/Features';
import Ecom from './pages/Ecom/Ecom';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Header from './components/Header/Header';
import Login from './pages/Login/Login';

function App() {
  

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
        
      </div>
      
      
      
    </>
  )
}

export default App
