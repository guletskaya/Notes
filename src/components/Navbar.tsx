import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import '../App.css'

const login = localStorage.getItem("isLoggedIn")==="true";
export const Navbar: React.FunctionComponent = () => {
  
const history = useHistory()


  function logout(event:any){
    localStorage.setItem("isLoggedIn",JSON.stringify(false))
    history.push('/login') 
    window.location.reload();
  } 
  if (login) {
    return (
      <nav>
    <div className="nav-wrapper indigo darken-4 px1">
      <a href="/" className="brand-logo">
        Your Notes
      </a>

      <ul className="right hide-on-med-and-down">
      <li>
          <NavLink exact to="/" className="main-nav" activeClassName='main-nav-active'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/todo" className="main-nav" activeClassName='main-nav-active'>ToDo List</NavLink>
        </li>
        <li>
          <NavLink exact to="/pictures" className="main-nav" activeClassName='main-nav-active'>Pictures</NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" className="main-nav" activeClassName='main-nav-active'>Profile</NavLink>
        </li>
        <li>
        <NavLink to="/login" onClick={logout} >Log out</NavLink>
        </li>       
        </ul>
    </div>
  </nav>
    )
  }
  return(
  <nav>
    <div className="nav-wrapper indigo darken-4 px1">
      <a href="/login" className="brand-logo">
        Your Notes
      </a>

      <ul className="right hide-on-med-and-down">
      <li>
          <NavLink exact to="/login" className="main-nav" activeClassName='main-nav-active'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/todo" className="main-nav" activeClassName='main-nav-active'>ToDo List</NavLink>
        </li>
        <li>
          <NavLink exact to="/pictures" className="main-nav" activeClassName='main-nav-active'>Pictures</NavLink>
        </li>
        <li>
          <NavLink exact to="/signup" className="main-nav" activeClassName='main-nav-active'>Sign Up</NavLink>
        </li>
        <li>
          <NavLink exact to="/login" className="main-nav" activeClassName='main-nav-active'>Log In</NavLink>
        </li>
        </ul>
    </div>
  </nav>
)
}