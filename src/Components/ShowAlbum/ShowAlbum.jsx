import React from 'react'
import { Card, CardColumns, CardGroup, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { getAlbumsById } from '../../Services/Services'
import './ShowAlbum.css';
export default class ShowAlbum extends React.Component {
    constructor() {
        super();
        this.state = {
            AlbumInfo: []
        }
    }

    componentDidMount() {
        this.getMyAlbum();
    }
    getMyAlbum = () => {
        let myList = this.state.AlbumInfo;
        let albumId = this.props.match.params.id;
        let data = getAlbumsById(albumId);
        data.then(response => {
            response.map(x => {
                myList.push(x);
            })
            this.setState({
                AlbumInfo: myList
            })
        })
    }

    render() {
        let myList = this.state.AlbumInfo;
        if (localStorage.getItem('Email') != null) {
            return (
                <Container>
                    <br></br>
                    <h1 style={{textAlign:'center'}}>Photos</h1>
                    <br></br>
                        <Col style={{marginLeft:'6vw'}}>
                        {
                            myList.map(x =>
                                <img src={x.url} className='image' style={{ margin:'3px', width:'25vw'}} ></img>
                            )
                        }
                        </Col>
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
