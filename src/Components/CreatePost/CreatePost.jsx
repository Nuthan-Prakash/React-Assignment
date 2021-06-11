import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { postMyPost } from '../../Services/Services'
import { NotificationContainer, NotificationManager } from 'react-notifications';
export default class CreatePost extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
    }

    HandleOnChangeTitle = (event) => {
        event.preventDefault();
        this.setState({
            title: event.target.value
        })
    }
    HandleOnChangeBody = (event) => {
        event.preventDefault();
        this.setState({
            body: event.target.value
        })
    }
    HandleOnClick = (event) => {
        event.preventDefault();
        if (this.state.title == '' || this.state.body == '') {
            NotificationManager.error('Please enter all fields','',3000);
        }
        else {
            const data = postMyPost(this.state.title, this.state.body, localStorage.getItem('UserID'));
            data.then((response) => console.log(response));
            NotificationManager.success('success', '', 3000);
            this.setState({
                title:'',
                body:''
            })
        }
    }

    render() {
        if (localStorage.getItem('Email') != null) {
            return (
                <>
                    <Container>
                        <br></br>
                        <h2 style={{ textAlign: 'center' }}>Create your Own post</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="title" value={this.state.title} onChange={this.HandleOnChangeTitle} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" rows={3} value={this.state.body} onChange={this.HandleOnChangeBody} />
                            </Form.Group>
                            <Button variant="dark" onClick={this.HandleOnClick}>Post</Button>
                        </Form>
                    </Container>
                    <NotificationContainer />
                </>
            )
        }
        else {
            return (
                <Redirect to="/Login"></Redirect>
            )
        }
    }
}

