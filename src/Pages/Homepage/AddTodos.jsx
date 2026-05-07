import React, { useState } from 'react'
import { todosStore } from '../../Store/todoStore'

const Search = () => {
    const [todos,setTodos] = useState('')
    const [content,setContent] = useState('')
    const {addTodos} = todosStore()
    const addList = ()=>{
      if(!todos || !content) return alert ('내용을 입력하세요')
        addTodos(todos,content)
        setTodos('')
        setContent('')
    }
  

   
  return (
    <div className='flex flex-col '>
     
         <input type="text" 
         placeholder='제목을 입력하세요.'
         value={todos}
         onChange={(e)=>setTodos(e.target.value)}
        //  onKeyPress={(e)=>{
        //   if(e.key === "Enter"){
        //     addTodos(todos)
        //     setTodos('')
        //   }
        //  }}
          className="input input-neutral m-4 w-100" />
         <textarea placeholder="할 일을 입력하세요." 
         value={content}
         onChange={(e)=>setContent(e.target.value)}
         className="textarea textarea-neutral m-4 w-100 h-100"
         ></textarea>
        <button className="btn m-4 w-100" onClick={addList}>추가</button>
    </div>
  )
}

export default Search
