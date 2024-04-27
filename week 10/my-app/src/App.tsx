
import './App.css'
import Login from './component/Login'
import Category from './component/Category'
import Register from './component/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './route/PrivateRoute'
import EditCategory from './component/EditCategory'


const App: React.FC = () => {
  const isAuthenticated = "true"; // Set your authentication logic here


  return (

    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path ="/category" element={<PrivateRoute/>}/>
    <Route path='/edit/:id' element={<EditCategory/>}/>
    </Routes >


  )
}

export default App
