import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'
import { SignUpPage } from './pages/SignUpPage'
import {ProfilePage}  from './pages/ProfilePage'
import { LoginPage } from './pages/LoginPage'
import { PicturesPage } from './pages/PicturesPage'
import  HomePage  from './pages/HomePage'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={TodosPage} path="/todo" />
          <Route component={PicturesPage} path="/pictures" />
          <Route component={SignUpPage} path="/signup" />
          <Route component={LoginPage} path="/login" />
          <Route component={ProfilePage} path="/profile" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
