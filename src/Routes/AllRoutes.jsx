import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCity from '../components/AddCity'
import AddCountry from '../components/AddCountry'
import Homepage from '../components/Homepage'

export default function AllRoutes() {
  return (
    <>
    <Routes>
    <Route path='/'element={<Homepage/>}/>
    <Route path='/add-country'element={<AddCountry/>}/>
    <Route path='/add-city'element={<AddCity/>}/>

    </Routes>
    </>
  )
}
