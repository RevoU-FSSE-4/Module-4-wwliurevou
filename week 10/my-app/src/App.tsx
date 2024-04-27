
import './App.css'
import Login from './component/Login'
import Category from './component/Category'
import Register from './component/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './route/PrivateRoute'


const App: React.FC = () => {
  const isAuthenticated = "true"; // Set your authentication logic here


  return (

    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path ="/category" element={<PrivateRoute/>}/>

    </Routes >


  )
}

export default App
