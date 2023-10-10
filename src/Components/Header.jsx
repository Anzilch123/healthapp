import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Header() {
  return (
    <div>
       <Navbar  className='navbar' >
        <Container> 
        <Navbar.Brand href="#home">  
            <img
              alt=""
              src="../pr.jpg"
              width="220"
              height="180"
              className="d-inline-block align-top"
            />{' '}
           
           <div className='img'> <img src="../p.jpg" alt=""  width="450" height="180" className='absolute1' /></div>
          </Navbar.Brand>
          <DropdownButton id="dropdown-basic-button" title="Menu">
      <Dropdown.Item href="#/action-1">Medical Education</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Health Information</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Medical Proffessionals</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Research</Dropdown.Item>

    </DropdownButton>
        </Container>
      </Navbar>
      <div className='relative'>
   

      <img src="/b5.avif" alt="not found" width="100%" height="700px"/>
      <div className='absolute'>
        <h2 className='head'>WELCOME TO PRACHAND !</h2>
<h4 className='head'>Poineering the future of Healthcare</h4>
<Button className='button' variant="outline-warning">Click here</Button>{' '}
      </div>
      </div>
    </div>
  )
}

export default Header
