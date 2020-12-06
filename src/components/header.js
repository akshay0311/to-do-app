import React from 'react'
import "./header.css"
import {Navbar,Nav,NavDropdown,FormControl,Button,Form} from "react-bootstrap";

function header(props) {
  return (
    <Navbar  className="navbar" expand="lg">
        <Navbar.Brand href="#home"><h1 className="navbar_brand">To-do-app</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"#F0F0F0"}} />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="navbar_link" href="#link"><span>History</span></Nav.Link>
            </Nav>
            <Form inline style={{margin:"auto"}}>
              <FormControl type="text" placeholder="Search by date" className="mr-sm-2" />
              <Button variant="light">Search</Button>
            </Form>
        </Navbar.Collapse>
        <span className="navbar_date">Today: {props.date}</span>
    </Navbar>
  )
}

export default header
