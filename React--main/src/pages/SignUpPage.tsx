import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'

export const SignUpPage: React.FC = () => {
  const history = useHistory()
  const [name, setName]=useState<string>('')
  
  return (
    <>
      <h1>Sign Up!</h1>

      <div className="row">
        <div className="input-field col s6">
          <input placeholder='Name' id="first_name" type="text" className="validate" value={name} onChange={e => {setName(e.target.value)}}/>
          <label htmlFor="title" className="active">
            Name
          </label>
        </div>
      </div>

      <LoginForm />
  
      <button className="btn" onClick={() => history.push('/')}>
        Back to ToDo List
      </button>
    </>
  )
}
