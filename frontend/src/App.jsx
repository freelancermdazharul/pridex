import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Pagelayout from './layout/Pagelayout'
import BordDerector from './pages/BordDerector/BordDerector'
import BussinessUnit from './pages/BussinessUnit/BussinessUnit'
import ContactUs from './pages/ContactUs/ContactUs'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <Pagelayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bussiness-units/all' element={<BussinessUnit />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/board-of-directors' element ={<BordDerector />} />
            </Routes>
      </Pagelayout>
    </>
  )
}

export default App
