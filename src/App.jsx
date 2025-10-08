import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Navbar/Footer/Footer'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home/Home'
import Drivers from './Components/Drivers/Drivers'
import Teams from './Components/Teams/Teams'
import History from './Components/History/History'

export default function 
() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />Home<Route />
            <Route path='/Drivers' element={<Drivers />} />Drivers<Route />
            <Route path='/Teams' element={<Teams />} />Teams<Route />
            <Route path='/History' element={<History />} />History<Route />
        </Routes>
        <Footer />
    </>
  )
}
