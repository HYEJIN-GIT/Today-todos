import React, { useState } from 'react'
import { todosStore } from '../../Store/todoStore'

const Search = () => {
    const {addTodos} = todosStore()
    const addList = ()=>{
        addTodos(todos)
    }
    const [todos,setTodos] = useState('')
  return (
    <div>
     
         <input type="text" 
         placeholder='할 일을 검색하세요.'
         value={todos}
         onChange={(e)=>setTodos(e.target.value)}
          className="input input-neutral" />

        <button className="btn" onClick={addList}>추가</button>
    </div>
  )
}

export default Search
