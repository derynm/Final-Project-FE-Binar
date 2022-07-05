import React from 'react'
import "../NavBar/NavbarBeforeLogin.css"

export const NavbarBeforeLogin = () => {
  return (
    <div className='navbar1'>
        <div className='container-sm'>
            <div className='d-flex justify-content-between'>
                <p className='text-home'>Sneakers</p>
                <button className='button-navbarBefore' variant="outline-primary">Login</button>
            </div>
      </div>
    </div>
  )
}
