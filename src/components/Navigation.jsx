import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation () {
  const setActiveClass = ({ isActive }) => {
    const auxStyle = 'text-decoration-none me-3'
    return isActive ? `text-white ${auxStyle}` : `text-secondary ${auxStyle}`
  }
  return (
    <>
      <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand>
            <NavLink to='/' className='text-white text-decoration-none'>PokeAPI</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink to='/' className={setActiveClass}>Home</NavLink>
              <NavLink to='/search' className={setActiveClass}>Search</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
