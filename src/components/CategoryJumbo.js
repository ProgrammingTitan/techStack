import React from 'react';
import { Jumbotron, Button, Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import AdBox from './admin/AdBox';

const imgStyle = {
    maxHeight: 200,
    maxWidth: 200
  }
  const mediaStyle = {
    color: "black",
    "text-decoration" : "none"
  }

class CategoryJumbo extends React.Component{



    state = {
        searchString : this.props.searchString,
        data: {},
        upData: [],
        downData: [],
        gotData: false
    } 

    async componentDidMount(){
        const key = "be04037ec49e466087cc0901fb6ba5ec";
            const response = await fetch(`https://newsapi.org/v2/everything?q=${this.state.searchString}&apiKey=${key}`);
            const json = await response.json();
            this.setState({
                data: json.articles,
                gotData: true,
            });

            this.state.data.map((item, index) => {
                if(index < 6){this.state.upData.push(item)}
                else if (index < 12 && index >= 6){this.state.downData.push(item)}
            });
        console.log(this.state.downData);
    }

    render(){

        return(
            <Container fluid>
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <AdBox />
                    </Col>
        <Col xs="12" sm="4" md="4" lg="4">
            {this.state.upData.map((item) => (
                <ListGroup>
                <a href={item.url} style={mediaStyle}>
                <ListGroupItem className="justify-content-between">{item.title} <Badge pill>{item.source.name}</Badge></ListGroupItem>
                </a>
                </ListGroup>
            ))}
            {console.log(this.state.data)}
        </Col>
        <Col  xs="12" sm="4" md="4" lg="4">
        {this.state.downData.map((item) => (
                <a href={item.url}>
                <img src={item.urlToImage} style={imgStyle} href={item.url}/>
                </a>
            ))}
        </Col>
        </Row>
        </Container>
            );
    }
}

export default CategoryJumbo;