import React from 'react'
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { getUserEmailList } from '../../Services/Services'
import { Link, Redirect } from "react-router-dom";
import { NotificationContainer,NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: ''
        };
    }
    HandleOnChange = (event) => {
        event.preventDefault();
        this.setState({
            email: event.target.value
        })
    }
   HandleOnClick = (event) => {
        event.preventDefault();
        if (this.state.email == '') {
            alert("Please enter email")
        }
        else {
            let userEmailList = getUserEmailList();
            let flag = false;
            userEmailList.then(y => {
                for (var i = 0; i < y.length; i++) {
                    if (y[i].email == this.state.email) {
                        localStorage.setItem('Email', this.state.email);
                        localStorage.setItem('UserID', y[i].id);
                        window.history.go(0);
                        NotificationManager.success('success', 'Login', 3000);
                        flag = true;
                        break;
                    }
                }
                if (flag == false) {
                    alert("Invalid Email");
                    window.history.go(0);
                }
            })
        }
    }
    render() {
        return (
            <>
            <h1 style={{ textAlign: 'center' }}>Welcome to the World of Blogs</h1>
    
            <Container className="col-4 mx-auto">
               
                <br></br>
                
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.HandleOnChange} />
                        </Form.Group>
                    </Row>
                    <Button variant="dark" type="submit" onClick={this.HandleOnClick} >
                        Login
                    </Button>
                </Form>
                {
                    localStorage.getItem('Email') == null ? (<Redirect to='/'></Redirect>) : (<Redirect to='/Posts' />)
                }
            </Container>
            <NotificationContainer/>
            </>
        )
    }
}

