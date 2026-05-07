import React from 'react'
import { useParams } from 'react-router-dom'
import { todosStore } from '../../Store/todoStore'

const TodosDetail = () => {
  const {id} = useParams()
  console.log(id)
  const {todoList} = todosStore()
 
  const detailList = todoList?.find((item)=>
    item.id ===  Number(id))
  
  
    return (
    <div>
    <div>{detailList?.title}</div>
      
    </div>
  )
}

export default TodosDetail
