import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  const date = new Date().toDateString()
  console.log(date)
  return (
    <div>
      <div className='flex justify-between shadow-xs '>
      <div className='m-5 text-2xl font-bold '>Today Todos?</div>
      <div className='m-5 text-2xl font-bold'>{date}</div>
      </div>
  
      <Outlet></Outlet>
    </div>
  )
}

export default Header
