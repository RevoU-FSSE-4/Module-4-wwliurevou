// React Router
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const Contact = () => {
  return <h1>Contact Page</h1>;
};

const NotFound = () => {
  return <h1>404 Not Found</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


//Nester Router
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const Contact = () => {
  return <h1>Contact Page</h1>;
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};
const DashboardHome = () => {
  return <h2>Dashboard Home</h2>;
};

const Projects = () => {
  return <h2>Projects</h2>;
};

const Settings = () => {
  return <h2>Settings</h2>;
};
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


//Private Router
import { Route, Routes, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  element,
  isAuthenticated,
}) => {
  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;


//React Router 2
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

const App: React.FC = () => {
  const isAuthenticated = false; // Set your authentication logic here

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute
          path="/dashboard"
          element={<Dashboard />}
          isAuthenticated={isAuthenticated}
        />
      </Routes>
    </Router>
  );
};

export default App;

//useNavigate
import { useNavigate } from 'react-router-dom';

const ExampleComponent = () => {

const navigate = useNavigate();

const handleRedirect = () => {
	navigate('/dashboard');
}

return (
	<button type=”button” onClick={}> Redirect </button>
)
}

export default ExampleComponent

//useParams
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();

  return <h1>User Profile: {username}</h1>;
};

export default UserProfile



// Live Coding 

/*
  BrowserRouter: Membungkus Component supaya bisa dikenakan url tertentu
  Routes => membungkus Route
  Route => mapping url dibutuhkan ada 2 props: 
    1. path => url path ex: /home, /about
    2. element => ini untuk componentnya 
  Link => untuk menuju ke url tertentu 
*/

/*
Website Peminjaman buku:
* Public Link => [Visitor]
- Home
- Login

* Private Link: [User]
- Dashboard {Logout}
- Profile
*/

/*
Local Storage is a web browser feature that allows web applications to store 
key-value pairs locally on the user's device.

// Storing data in Local Storage
localStorage.setItem('username', 'John');
localStorage.setItem('isLoggedIn', 'true');

// Retrieving data from Local Storage
const username = localStorage.getItem('username');
const isLoggedIn = localStorage.getItem('isLoggedIn');

localStorage.clear();
*/

 
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const isLogin = localStorage.getItem('isLogin') === 'true';
    return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;


// File App 

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import NavigationComponent from './NavigationComponent';
import PrivateRoute from './PrivateRoute';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

const About = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
}

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  function onSubmit(){
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('Username', username);
    navigate('/dashboard');
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label> Username </label>
          <input name="username" onChange={(e) => setUsername(e.target.value)} type="text"/>
          <br/>
        <label> Password </label>
          <input name="password" type="password"/>
          <br/>
        <button> Submit </button>
      </form>
    </>
  );
}

const Dashboard = () => {
  const navigate = useNavigate()

  function logout(){
    //localStorage.setItem('isLogin', 'false');
    localStorage.clear();
    navigate('/');
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}> Logout</button>
    </>
  );
}

const Profile = () => {
  let username = localStorage.getItem('Username');
  return (
    <>
      <h1>Profile</h1>
      <br/>
      <h1>Hello, {username} !</h1>
    </>
  );
}


const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
    </>
  );
}


function App() {
  return (
    <div className="App">
        <h1>Revou Library</h1>
        <NavigationComponent />
        <hr/>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
              <Route path= "/dashboard" element={<Dashboard />} />
              <Route path= "/profile" element={<Profile />} />
          </Route>
          <Route path= "*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;





