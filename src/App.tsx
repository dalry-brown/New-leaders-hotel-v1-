import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Pages from './views/Pages'
import Login from './views/Login'
import SignUp from './views/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Pages/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
