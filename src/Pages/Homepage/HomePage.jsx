import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const goToTodos = () => {
    navigate('/todos')
  }

  return (
    <div className="flex items-center justify-center min-h-[75vh]">
      
      <div className="bg-white border-4 border-[#ffd9e8] rounded-[40px] p-30 shadow-[0_12px_0px_#ffd9e8] max-w-2xl w-full text-center ">
        
    
        <h1 className="text-5xl font-black text-[#ff7bac] leading-tight">
          My Daily
          Todo List
        </h1>

      
        <p className="mt-6 text-lg text-[#7b6f76] leading-relaxed">
          오늘 해야 할 일을 정리하고
          <br />
          하루를 더 알차게 보내보세요 
        </p>


        <div className="mt-10 flex justify-center gap-4">
          
          <button
            onClick={goToTodos}
            className="
              px-8 py-4
              rounded-full
              bg-[#ff7bac]
              text-white
              font-bold
              text-lg
              border-2
              border-[#ffb3cf]
              hover:scale-95
              transition
              cursor-pointer
            "
          >
            시작하기 
          </button>

          <button
            className="
              px-8 py-4
              rounded-full
              bg-[#fff0f6]
              text-[#ff7bac]
              font-bold
              border-2
              border-[#ffd9e8]
               hover:scale-95
              transition
              cursor-pointer
            "
          >
            둘러보기
          </button>

        </div>
      </div>
    </div>
  )
}

export default HomePage