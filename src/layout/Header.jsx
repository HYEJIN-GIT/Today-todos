import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Header = () => {
  const date = new Date().toDateString()
  const navigate = useNavigate()
  const goToHome = ()=>{
    navigate('/')
  }
  return (
    <div>
      <div className='flex justify-between shadow-xs '>
      <div className='m-5 text-2xl font-bold cursor-pointer' onClick={goToHome}>Today Todos?</div>
      <div className='m-5 text-2xl font-bold'>{date}</div>
      </div>
  
      <Outlet></Outlet>
    </div>
  )
}

export default Header
