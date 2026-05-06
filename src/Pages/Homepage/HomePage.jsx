import React from 'react'
import { todosStore } from '../../Store/todoStore'
import { useNavigate } from 'react-router-dom'
import RestList from './RestList'
import Search from './Search'
import Todos from '../Todos/Todos'

const HomePage = () => {
  const {todoList} = todosStore()
 
  return (
    <div className='m-10'>
      {/* 남은 할일 보여주기 */}
    <div className='flex justify-center '>
    <RestList></RestList>
    <RestList></RestList>
    </div>
    <div className='flex justify-center '>
    <RestList></RestList>
    <RestList></RestList>
    </div>
     
 <div>
  <Search></Search>
 </div>
  <Todos></Todos>
    </div>
    
  )
}

export default HomePage
