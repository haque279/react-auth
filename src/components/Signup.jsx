import React, {useState, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password)
  }
  return (
    <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control form-control-lg" placeholder="Name" name="name" required />
            </div>
            <div className="form-group">
              <input type="email"  value={email} onChange={e => setEmail(e.target.value)}  className="form-control form-control-lg" placeholder="Email Address" name="email" />
              <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div className="form-group">
              <input type="password"  value={password} onChange={e => setPassword(e.target.value)}  className="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
