import React from 'react'
import Chat from './Components/Chat';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <NavBar user={user} />
      <Header />
      {user ? <Chat /> : (
        <h2 className="connectedMessage">You must be connected to access to the chat</h2>
      )}
    </div>
  );
}

export default App;
