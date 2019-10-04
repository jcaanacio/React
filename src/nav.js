import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, Button, FormControl, Tabs, Tab} from 'react-bootstrap';
function App() {
  return (
    <Navbar bg="dark" expand="lg">
		<Navbar.Brand href="#home">
			<img
				src="/favicon.ico"
				width="40"
				height="40"
				className="d-inline-block align-top"
				alt="React Bootstrap logo"
			/>
		</Navbar.Brand>
	<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">

			</Nav>
	   
		</Navbar.Collapse>
	</Navbar>
  );
}

export default App;
