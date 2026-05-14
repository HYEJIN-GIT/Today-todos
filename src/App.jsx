
import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Homepage/HomePage'
import Header from './layout/Header'
import Todos from './Pages/Todos/Todos'
import TodosDetail from './Pages/Todos/TodosDetail'
import LoginPage from './Pages/Login/LoginPage'
import { useState } from 'react'
import Private from './Pages/Login/Private'
import Method from './Pages/Homepage/Method'

function App() {
  const [authenticate,setAuthenticate] = useState(false)
  return (
    <Routes>
      <Route path='/' element={<Header ></Header>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path='method' element={<Method></Method>}></Route>
        <Route path='login' element={<LoginPage></LoginPage>}></Route>
        <Route path='todos'>
        <Route index element={<Private></Private>}></Route>
          <Route path=':id' element={<TodosDetail></TodosDetail>}></Route>

        </Route>
      </Route>
    </Routes>

  )
}

export default App
