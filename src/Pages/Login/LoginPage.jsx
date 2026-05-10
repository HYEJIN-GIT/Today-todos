
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../Store/authStore'
const LoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate()
 
  const goToTodos = ()=>{
   
    login()
    navigate('/todos')
  }


  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      
      <div className="w-full max-w-md">
       
        <div className="bg-white border-4 border-[#ffd9e8] rounded-[40px] p-10 shadow-[0_12px_0px_#ffd9e8]">
          

          <div className="text-center">
            

            <h1 className="text-4xl font-black text-[#ff7bac]">
              Welcome Back!
            </h1>

            <p className="mt-3 text-[#7b6f76]">
              오늘도 할 일을 정리해봐요 ✨
            </p>
          </div>

          <div className="mt-10 space-y-5">
            
         
            <div>
              <label className="block mb-2 font-bold text-[#ff7bac]">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border-4
                  border-[#ffe0eb]
                  bg-[#fff8fb]
                  outline-none
                  focus:border-[#ff7bac]
                  transition
                "
              />
            </div>

           
            <div>
              <label className="block mb-2 font-bold text-[#ff7bac]">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border-4
                  border-[#ffe0eb]
                  bg-[#fff8fb]
                  outline-none
                  focus:border-[#ff7bac]
                  transition
                "
              />
            </div>

            
            <div className="flex items-center justify-between text-sm">
              
              <label className="flex items-center gap-2 text-[#7b6f76]">
                <input type="checkbox" className="checkbox checkbox-sm checkbox-secondary" />
                remember me
              </label>

              <button className="text-[#ff7bac] font-bold hover:underline">
                forgot?
              </button>
            </div>

           
            <button
              className="
                w-full
                mt-4
                py-4
                rounded-full
                bg-[#ff7bac]
                text-white
                text-lg
                font-black
                border-4
                border-[#ffb3cf]
                hover:translate-y-1
                transition
                cursor-pointer
              "
              onClick={goToTodos}
            >
              Login
            </button>

          </div>

          {/* bottom */}
          <div className="mt-8 text-center text-[#7b6f76]">
            아직 계정이 없나요?{' '}
            <button className="text-[#ff7bac] font-bold hover:underline">
              회원가입
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage