import React, { useState } from 'react'
import { replace, useNavigate, useParams } from 'react-router-dom'
import { todosStore } from '../../Store/todoStore'

const TodosDetail = () => {
  const { id } = useParams()
  const { todoList, deleteTodos, updateTodos } = todosStore()
  const navigate = useNavigate()

  const detailList = todoList?.find(
    (item) => item.id === Number(id)
  )

  // const [isEdit, setIsEdit] = useState(false)
  // const [updateContent, setUpdateContent] = useState(
  //   detailList?.content || ''
  // )



  const [isEdit,setIsEdit] = useState(false)
  const [updateContent,setUpdateContent] = useState(detailList?.content)


  const deleteList = (id) => {
    deleteTodos(id)
    navigate('/todos', replace)
  }


  const updateList = ()=>{
    if(!isEdit){
      setIsEdit(true)
      return
    }
    updateTodos(detailList.id,updateContent)
    setIsEdit(false)
  }

  return (
    <div>
      <div>제목 : {detailList?.title}</div>

      <div>
        오늘의 할일을 자세히 알려주세요 !


      {
        isEdit ? <input 
        value={updateContent}
        onChange={(e)=>setUpdateContent(e.target.value)}
        /> : detailList?.content
      }
 
 

       
      </div>

      <button
        className="btn"
        onClick={() => deleteList(detailList?.id)}
      >
        삭제
      </button>

    <button className="btn"
    onClick={updateList}
    >
      {
        isEdit ? "저장" : "수정"
      }
      </button>


      {/* <button
        className="btn"
        onClick={handleUpdate}
      >
        {isEdit ? '저장' : '수정'}
      </button> */}
    </div>
  )
}

export default TodosDetail