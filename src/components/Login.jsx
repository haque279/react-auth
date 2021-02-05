import React, {useState, useContext, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, auth, logout} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault();
    login(email, password)
   
  }
  
  useEffect(()=> {
    if(auth.token){
      props.history.push('/')
    }
  })

  return (
    <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your DevConnector account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="Email Address" name="email" />
            </div>
            <div className="form-group">
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}  className="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
