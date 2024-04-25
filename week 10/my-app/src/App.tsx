
import './App.css'
import Login from './assets/component/Login'
import Category from './assets/component/Category'
import Register from './assets/component/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Routes >

      </BrowserRouter>
    </>
  )
}

export default App
