import React from 'react'

export const ProfilePage: React.FC = () => {

  return(
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <h2>Name: Username</h2>       
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <h2>Email: Usermail@gmail.com</h2>
        </div>
      </div>
    </form>
    </div>
  )
}