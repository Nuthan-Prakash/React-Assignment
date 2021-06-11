import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
export default class Header extends React.Component {
    constructor() {
        super();
    }
    HandleLogOut = (event) => {
        event.preventDefault();
        localStorage.removeItem('Email');
        localStorage.removeItem('UserID');
        window.history.go(0);
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" >
                <Link to="/posts" style={{textDecoration:'none'}}><Navbar.Brand href="/posts" className="mx-2"><big>B</big>logs</Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Link to="/Posts"><Button variant="outline-light" style={{ marginRight: '5px', width: '80px' }}>Posts</Button></Link>
                    <Link to="/Albums"><Button variant="outline-light">Albums</Button></Link>
                </Nav>
                <Nav className="mr-auto">
                    {
                        localStorage.getItem('Email') == null ? (<Link to="/Login"><Button variant="outline-light" className="mx-2">Login</Button></Link>) : (<Button variant="outline-light" onClick={this.HandleLogOut}>Logout</Button>)
                    }

                </Nav>

            </Navbar>
        );
    }
}



