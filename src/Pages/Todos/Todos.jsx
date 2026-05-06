import React from 'react'
import { todosStore } from '../../Store/todoStore'

const Todos = () => {
  const {todoList} = todosStore()
  return (
    <div>
    <div>
    {todoList.map((item)=>(
      <div className='cursor-pointer' >{item.title}</div>
    ))}
  </div>
    </div>
  )
}

export default Todos
