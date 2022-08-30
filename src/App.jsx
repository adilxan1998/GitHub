import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from './components/Login/Login'
import Home from './components/Home/Home';

function App() {

  const { pathname } = useLocation()

  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const user = {
    username: "adilxan9627",
    password: "ab1733108",
  };

  const useAuth = (params) => {
    return user.username === params.userName &&
      user.password === params.password
      ? navigate("/home")
      : navigate("/");
  };

  return (
    <>
      <main>
        {pathname === "/" ? (<Login isLogin={auth} login={useAuth} />) : (<Home />)}
      </main>


    </>
  )
}

export default App
