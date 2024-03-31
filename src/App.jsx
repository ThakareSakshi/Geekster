// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import TopTiers from './components/Top-tiers/TopTiers'
import FullStackCourse from './components/FullStackCourse/FullStackCourse'
import Features from './components/Features/Features'
import Team from "./components/Team/Team"
import HiringCompanies from './components/HiringCompanies/HiringCompanies'

function App() {
  

  return (
    <>
    <Navbar/>
    <Banner/>
    <TopTiers/>
    <div className='background-grid'>
      <img src="/background-grid.png"></img>
    </div>
    <FullStackCourse/>
    <Features/>

    <Team/>
    <HiringCompanies/>
      
    </>
  )
}

export default App
