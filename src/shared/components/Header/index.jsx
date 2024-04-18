import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Logo from "../../../assets/432693.png"

const Header = () => {
  return (
  <>
      <Navbar
   
    color="dark"
    dark
  >
    <NavbarBrand href="/" className="d-flex gap-2 align-items-center">
      <img
        alt="logo"
        src={Logo}
        className='rounded-circle object-fit-cover'
        style={{
          height: 50,
          width: 50
        }}
      />
    Employees App
    </NavbarBrand>
  </Navbar>
  </>
  )
}

export default Header
