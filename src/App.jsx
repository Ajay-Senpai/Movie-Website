import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("Logged In:", currentUser);
        navigate("/");
      } else {
        setUser(null);
        console.log("Logged Out");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={user ? <Home /> : <Login />} 
        />
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/player/:id" 
          element={user ? <Player /> : <Login />} 
        />
      </Routes>
    </div>
  )
}

export default App
