import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Allpages/Home'
import Dashboard from '../Allpages/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default AllRoutes