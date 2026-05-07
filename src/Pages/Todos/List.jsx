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
            todoList.map((item)=>(
              <div className='flex '>
                <input type='checkbox'></input>
               <div className="m-5 w-100 cursor-pointer"onClick={()=>goToDetail(item.id)}>{item.title}</div>
             
              </div>
              
            )
            )
        }
       
    </div>
  )
}

export default List
