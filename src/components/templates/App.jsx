import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MainHeader from '../organisms/MainHeader'

const App = () => {

  if (!localStorage.getItem('token')) return <Navigate to='/login' />

  return (
    <>
      <MainHeader />
      <div className='container lg:max-w-140 mx-auto pt-5'>
        <Outlet />
      </div>
    </>
  )
}

export default App
