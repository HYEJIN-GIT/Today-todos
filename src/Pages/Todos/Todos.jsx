import React from 'react'
import { todosStore } from '../../Store/todoStore'
import List from './List'
const Todos = () => {
  const {todoList} = todosStore()

   return (
    <div>
    <div>
   
     <List></List>
    
  </div>
    </div>
  )
}

export default Todos
