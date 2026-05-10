import React from 'react'
import { todosStore } from '../../Store/todoStore'
import List from './List'
import AddTodos from '../Homepage/AddTodos'
const Todos = () => {

   return (
  
    <div className='flex justify-between m-5'>
    <AddTodos></AddTodos>
     <List></List>
    
  </div>
  
  )
}

export default Todos
