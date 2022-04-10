import React, { useState, createContext } from 'react'
import { useHistory } from 'react-router-dom'



export const LoginForm: React.FC = () => {
const [email, setEmail]=useState<string>('')
const [password, setPassword]=useState<string>('')

const history = useHistory()

function signUp(event: any){
  if (email==="usermail@gmail.com"&&password==="password")
  history.push('/profile') 
}

return(
<div className="row">
    <form className="col s12">
    <div className="row">
        <div className="input-field col s12">
          <input placeholder='Email' id="email" type="email" className="validate" value={email} onChange={e => {setEmail(e.target.value)}}/>
          <label htmlFor="title" className="active">
            Email
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input placeholder='Password' id="password" type="password" className="validate" value={password} onChange={e => {setPassword(e.target.value)}}/>
          <label htmlFor="title" className="active">
            Password
          </label>
        </div>
      </div>
    </form>

    <button type='submit' className="btn" onClick={signUp}>
        Sign Up
      </button>
  </div>
  )}
