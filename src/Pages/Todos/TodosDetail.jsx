import React from 'react'
import { replace, useNavigate, useParams } from 'react-router-dom'
import { todosStore } from '../../Store/todoStore'

const TodosDetail = () => {
  const {id} = useParams()
  const {todoList, deleteTodos,completeTodos} = todosStore()
  const navigate = useNavigate()
  
  const detailList = todoList?.find((item)=>
    item.id ===  Number(id))
  const deleteList = (id)=>{
    deleteTodos(id)
    navigate('/todos', replace)
  }
  const editList = (content)=>{
    console.log(content)
  }
  
    return (
    <div>
    <div>제목 : {detailList?.title}</div>
    <div>오늘의 할일을 자세히 알려주세요 ! {detailList?.content}</div>
    <button className="btn" onClick={()=>deleteList(detailList?.id)}>삭제</button>
    <button className='btn' onClick={()=>editList(deleteList?.content)}>수정</button>
      
    </div>
  )
}

export default TodosDetail
