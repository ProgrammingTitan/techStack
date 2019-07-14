import React from 'react';
import {Jumbotron, Button, Container, Row, Col, Media} from 'reactstrap';

class Thread extends React.Component{
    state = {
        styles : {
            titleStyle: {
                color: 'red',
            },
            thumbSize: {
                width: 140,
                height: 105
            },
        },

        data : this.props,

        time: this.props.data.publishedAt

    }

    render(){

        var realTime = this.state.time.substring(0,10);
        const imgStyle = {
            maxHeight: 300,
            maxWidth: 300
          }

        const link = {
            "text-decoration" : "none"
        }

        return (
            <div>
      {/* <Jumbotron fluid style={{"background" : "linear-gradient(0deg, rgba(110,157,163,0.23015143557422968) 0%, rgba(176,192,194,0.19373686974789917) 100%, rgba(209,209,209,0.8491990546218487) 100%, rgba(144,63,1,0.8604035364145658) 100%)"}}>
          <Container fluid>
              <Row>
                  <Col xs="12" sm={{ size: 4, offset: 1 }} md={{ size: 4, offset: 1 }} lg={{ size: 4, offset: 1 }}  className = "headline-thumbnail">
                    <img href={this.props.data.urlToImage} src={this.props.data.urlToImage} width="250" height="200" alt="me" align="left" />
                    </Col>
                    <Col xs="12" sm={{ size: 6, offset: 0 }} md={{ size: 6, offset: 0 }} lg={{ size: 6, offset: 0 }}><h3><a className="link" href={this.props.data.url}>{this.props.title}</a></h3>
                    <h6>{this.props.data.description}</h6>
                    {this.props.data.author && <p>Published by: {this.props.data.author}</p>}
                    <p>Date Published:  {realTime} </p>
                    <Button outline color="info" href={this.props.data.url}>Learn More</Button>
                    </Col>
              </Row>
        </Container>
      </Jumbotron> */}
      <Media className= "mb-4" href={this.props.data.url} style={{link}}>
      <Media left href={this.props.data.url}>
        <Media  className= "mr-4" object src={this.props.data.urlToImage} style={imgStyle} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {this.props.title}
        </Media>
            {this.props.data.description}
            <p>Date Published:  {realTime} </p>
        </Media>
    </Media>
        
            </div>
        );
    }
}


export default Thread;