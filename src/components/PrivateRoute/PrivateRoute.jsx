import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({isAuth}) => {
  return (
    <div>
      {isAuth?<Outlet/>:<Navigate to={'/login'}></Navigate>}
    </div>
  )
}

export default PrivateRoute
