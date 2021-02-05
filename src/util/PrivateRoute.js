// import React, {useContext, useState, useEffect} from 'react'
// import {Route, Redirect} from 'react-router-dom'
// import jwt_decode from 'jwt-decode'
// import { AuthContext } from '../context/AuthContext'

// const {auth} = useContext(AuthContext)
// const [user, setUser] = useState({})

// useEffect(() => {
//   if(auth.token){
//     setUser(jwt_decode(auth.token))
//   }
// })

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     user._id
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )

// export default PrivateRoute;

import React, {useContext, useState, useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { AuthContext } from '../context/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
  const {auth} = useContext(AuthContext)

  return (
    <div>
      <Route {...rest} render={(props) => (
    auth.isAuth
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
    </div>
  )
}
