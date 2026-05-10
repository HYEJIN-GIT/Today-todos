import React from 'react'
import { Navigate } from 'react-router-dom'
import Todos from '../Todos/Todos'
import { useAuthStore } from '../../Store/authStore'

const Private = () => {
    const authenticate = useAuthStore((state) => state.authenticate);
  return (
  authenticate === true ? <Todos></Todos> : <Navigate to='/login'></Navigate>
  )
}

export default Private
