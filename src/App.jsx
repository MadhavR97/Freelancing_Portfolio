import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Luxe from './pages/luxe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/luxe' element={<Luxe />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
