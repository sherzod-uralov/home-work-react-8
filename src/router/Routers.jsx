import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import JsonPlaseholder from '../components/JsonPlaseholder'
import Bmi from '../components/Bmi'
import Example from '../components/Home'
import Count from '../components/Count'
const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Example/>}/>
        <Route path='/json' element={<JsonPlaseholder/>}/>
        <Route path='/bodyMassaIndex' element={<Bmi/>}/>
        <Route path='/Count' element={<Count/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers
