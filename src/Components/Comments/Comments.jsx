import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import React from 'react'
import { Card, CardColumns, CardGroup, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { getPostById, getComments } from '../../Services/Services'
export default class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            currentPost: {}
        }
    }

    componentDidMount() {
        this.getCommentOfMyBlogs();
        this.getCurrentPost();
    }
    getCommentOfMyBlogs = () => {
        let myList = this.state.comments;
        let postId = this.props.match.params.id;
        //console.log(postId);
        let data = getComments(postId);
        data.then(response => {
            response.map(x => {
                myList.push(x);
            })
            this.setState({
                comments: myList
            })
        })
    }
    getCurrentPost = () => {
        let postId = this.props.match.params.id;
        //console.log(postId);
        let data = getPostById(postId);
        data.then(response=>{
            console.log(response);
            this.setState({
                currentPost:response
            })
        })
    }
    render() {
        let myList = this.state.comments;
        let myPost = this.state.currentPost;
        if (localStorage.getItem('Email') != null) {
            return (
                <Container>
                    <br></br>
                    <h2>Post</h2>
                    <Card style={{ width: '100%', margin: '5px' }}>
                                    <Card.Body>
                                        <Card.Title>Title : {myPost.title}</Card.Title>
                                        <hr></hr>
                                        <Card.Text style={{ color: 'black' }}>
                                              {myPost.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                    <br></br>
                    <h1>Comments</h1>
                    <br></br>
                    <CardColumns>
                        {
                            myList.map(x =>
                                <Card style={{ width: '100%', margin: '5px' }}>
                                    <Card.Body>
                                        <Card.Title>Name : {x.name}</Card.Title>
                                        <hr></hr>
                                        {/* <ListGroup className="list-group-flush">
                                            <ListGroupItem>Email : {x.email}</ListGroupItem>
                                        </ListGroup> */}
                                        <Card.Text style={{ color: 'black' }}>
                                            Comment : {x.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        }
                        <br></br>
                    </CardColumns>
                </Container>

            )
        }
        else {
            return (
                <Container>
                    <Redirect to="/Login"></Redirect>
                </Container>

            )
        }
    };
}
