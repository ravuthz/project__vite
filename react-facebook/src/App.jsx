import React, { useState } from 'react'
import './App.css'
import { LoginButton } from 'react-facebook';

function App() {

  const handleRes = (data) => {
    console.log(data);
  }

  const handleErr = (error) => {
    console.log(error);
  }

  return (
    <div className="App">

      <LoginButton
          scope="email"
          onError={handleErr}
          onCompleted={handleRes}
        >
          <span>Login via Facebook</span>
      </LoginButton>
      
    </div>
  )
}

export default App
