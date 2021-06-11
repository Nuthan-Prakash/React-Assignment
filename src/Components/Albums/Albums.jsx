import { Button } from 'react-bootstrap';
import React from 'react'
import { Card, CardColumns, CardGroup, Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { getAlbums} from '../../Services/Services';
import './Albums.css'
export default class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      myBlogs: []
    }
  }

  componentDidMount() {
    this.getMyAlbums();
  }
  getMyAlbums = () => {
    let myList = this.state.myBlogs;
    let data = getAlbums();
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
          <h1>Albums</h1>
          <br></br>
          <CardColumns>
            {
              myList.map(x =>
                <Card style={{ width: '100%', margin: '5px' }} className="card">
                  <Card.Body>
                    <Card.Title>Title : {x.title}</Card.Title>
                    {/* <hr></hr> */}
                  </Card.Body>
                  <Button variant="dark"><Link to={{ pathname: `/ShowAlbum/${x.id}` }} style={{textDecoration:'none',color:'white'}}>Know More</Link></Button>
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

