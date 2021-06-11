import { Button } from 'react-bootstrap';
import React from 'react'
import { Card, CardColumns, Col, Row, Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { getListOfBlogs } from '../../Services/Services';
import './Posts.css'
export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      myBlogs: []
    }
  }

  componentDidMount() {
    this.getMyBlogs();
  }
  getMyBlogs = () => {
    let myList = this.state.myBlogs;
    let data = getListOfBlogs();
    data.then(y => {
      y.map(x => {
        if (x.userId == localStorage.getItem('UserID')) {
          myList.push(x)
        }
      })
      this.setState({
        myBlogs: myList
      })
    })
  }

  render() {
    let myList = this.state.myBlogs;
    if (localStorage.getItem('Email') != null) {
      return (
        <Container>
          <br></br>
          <Row>
            <Col>
              <h1>MyBlogs</h1>
            </Col>
            <Col>
              <Button variant="dark" style={{ marginLeft: '36vw', marginTop: '0.5vh' }}><Link to="/CreatePost" style={{textDecoration:'none',color:'whitesmoke'}}>Create</Link></Button>
            </Col>
          </Row>
          <br></br>
          <CardColumns>
            {
              myList.map(x =>

                <Card style={{ width: '100%' }} className="mx-auto my-4 card">
                  <Card.Body>
                    <Card.Title>Title : {x.title}</Card.Title>
                    <hr></hr>
                    <Card.Text style={{ color: 'black' }}>
                      {x.body}
                    </Card.Text>
                  </Card.Body>
                  <Button variant="dark"><Link to={{ pathname: `/Comments/${x.id}` }} style={{ textDecoration: 'none', color: 'white' }}>Show Comments</Link></Button>
                </Card>

              )
            }
          </CardColumns>
          <br></br>

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
