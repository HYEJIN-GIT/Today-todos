import React from 'react'
import { useNavigate } from 'react-router-dom'
import { todosStore } from '../../Store/todoStore'

const List = () => {
    const {todoList} = todosStore()
    const navigate = useNavigate()
    const goToDetail = (id)=>{
        navigate(`/todos/${id}`)
    }
  return (
    <div>
        {
            todoList.map((item)=>
                <div className="m-5 cursor-pointer"onClick={()=>goToDetail(item.id)}>{item.title}</div>)
        }
    
    </div>
  )
}

export default List
