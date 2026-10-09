import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import Clock from './components/Clock'

function App() {

  return (
    <>
      <GeneralInfo/>
      <Education/>
      <Experience/>   
      <Clock/>   
    </>
  )
}

export default App
