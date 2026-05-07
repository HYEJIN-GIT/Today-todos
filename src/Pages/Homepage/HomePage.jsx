import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const goToTodos = ()=>{
    navigate('/todos')
  }
 
  return (
    <div className='m-10'>
      
    
    <button className="btn" onClick={goToTodos}>리스트 보러가기</button>
    </div>
    
  )
}

export default HomePage
