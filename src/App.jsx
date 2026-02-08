import './App.css'
import { useEffect, useState } from 'react'

function UserGreeting() {
  return <h2>Welcome back!</h2>
}

function GuestGreeting() {
  return <h2>Please sign up.</h2>
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);


  return (
    <div className='container'>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        isLoggedIn ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : 
        <button onClick={handleLoginClick}>Login</button>
      }
    </div>
  )
}

export default App
