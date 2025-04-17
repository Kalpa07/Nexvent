import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'

const App = () =>{

  return (
    <>
    <div className='bg-picture'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
