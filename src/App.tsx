
import './App.css'
import Login from './assets/component/Login'
import Category from './assets/component/Category'
import Register from './assets/component/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './route/PrivateRoute'


const App: React.FC = () => {
  const isAuthenticated = false; // Set your authentication logic here


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/category" element={
        <PrivateRoute>
          <Category />
          </PrivateRoute>}></Route>

      </Routes>
    </Router >

  )
}

export default App
