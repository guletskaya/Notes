import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'
import { SignUpPage } from './pages/SignUpPage'
import {ProfilePage}  from './pages/ProfilePage'
import { LoginPage } from './pages/LoginPage'
import { PicturesPage } from './pages/PicturesPage'
import  HomePage  from './pages/HomePage'

const login = localStorage.getItem("isLoggedIn")==="true";

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact >
            {login ?  <HomePage/> : <Redirect to="/login" />}
            </Route>
          <Route component={LoginPage} path="/login" />
          <Route component={ProfilePage} path="/profile" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
