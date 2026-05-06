
import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Homepage/HomePage'
import Header from './layout/Header'
import Todos from './Pages/Todos/Todos'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Header></Header>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path='todos'>
        <Route index element={<Todos></Todos>}></Route>
          <Route path=':id' element={<Todos></Todos>}></Route>

        </Route>
      </Route>
    </Routes>

  )
}

export default App
