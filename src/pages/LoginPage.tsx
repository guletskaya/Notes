import React from 'react'
import { useHistory } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'

export const LoginPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Log In!</h1>
      <LoginForm />
    </>
  )
}
