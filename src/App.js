import React from 'react'
import Routes from './routes/'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer autoClose={3000} position='top-left'/>
    </div>
  );
}

export default App;
