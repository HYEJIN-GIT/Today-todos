import React from 'react'
import { Outlet, useNavigate,NavLink} from 'react-router-dom'

import { useAuthStore } from '../Store/authStore'

const Header = () => {
  const authenticate = useAuthStore((state) => state.authenticate);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate()

  
  const goToHome = () => {
    navigate('/')
  }
  

  return (
    <div className="min-h-screen bg-[#fbf4f8] overflow-hidden">
      
     
      <header className="px-6 py-5">
        
        <div className="max-w-5xl mx-auto bg-white border-4 border-[#ffd9e8] rounded-[30px] px-8 py-5 shadow-[0_8px_0px_#ffd9e8] flex items-center justify-between">
          
         
          <div
            onClick={goToHome}
            className="
              text-3xl
              font-black
              text-[#ff7bac]
              cursor-pointer
              hover:scale-105
              transition
            "
          >
             Daily Todos
          </div>

          <div className="flex items-center gap-3">


{authenticate ? (
  <button
    onClick={logout}
    className=" px-5
      py-2
      rounded-full
      text-[#ff7bac]
      font-bold
       cursor-pointer
     "
  >
    로그아웃
  </button>
) : (
  <NavLink to="/login">
    <button   className="    px-5
      py-2
      rounded-full
      text-[#ff7bac]
      font-bold
      cursor-pointer
      ">로그인</button></NavLink>
)}

</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Header