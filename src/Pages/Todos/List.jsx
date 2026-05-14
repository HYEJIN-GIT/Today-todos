import React from 'react'
import { useNavigate } from 'react-router-dom'
import { todosStore } from '../../Store/todoStore'

const List = () => {
    const {todoList,deleteTodos,completeTodos} = todosStore()
    const navigate = useNavigate()
    const goToDetail = (id)=>{
        navigate(`/todos/${id}`)
    }

    console.log(todoList)
  return (
    <div>
        {
            todoList.map((item)=>(
              <div className='flex border-b-1 m-1'>
                <input type='checkbox'  checked={item.isDone} onChange={()=>{completeTodos(item.id)}}></input>
               
               <div className={`m-5 w-100 cursor-pointer ${item.isDone === true ? "line-through":""}`} onClick={()=>goToDetail(item.id)}>{item.title}</div>
                <button className='btn m-3' onClick={()=>deleteTodos(item.id)}>삭제</button>
              </div>
              
            )
            )
        }
       
    </div>
  )
}

export default List
