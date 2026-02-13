import { Navigate, useLocation } from 'react-router-dom'
import {useAuth} from './Auth'
import type { ReactNode } from 'react'
export const RequireAuth = ({children}: {children: ReactNode}) => {
    const auth=useAuth()
    const location=useLocation()
    if(!auth.user){
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }
  return children
}
