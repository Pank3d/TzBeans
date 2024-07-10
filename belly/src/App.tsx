import { Route, Routes } from 'react-router-dom'
import './App.module.scss'
import BeansPage from './pages/BeansPage'
import Home from './pages/Home'




function App() {

  
  return (
      <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beans" element={<BeansPage />} />
      </Routes>

      </>
    )
  }

export default App
