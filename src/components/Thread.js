import React from 'react';
import { Container, Row, Col, Media} from 'reactstrap';
import techStackLogo from '../logos/Techstack.2.jpg';

class Thread extends React.Component{
    state = {

        data : this.props,

        time: this.props.data.publishedAt

    }

    render(){

        var realTime = this.state.time.substring(0,10);
        const imgStyle = {
            maxHeight: 300,
            maxWidth: 300,
            minWidth: 300
          }

        const mediaStyle = {
            color: "black",
            "text-decoration" : "none",
            "margin-bottom" : "5px"
        }


        return (
            <Container fluid>

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
    
        <Media href={this.props.data.url} style={mediaStyle}>
        <Row>
          <Media left href={this.props.data.url}>
          <Col  xs="12" sm="12" md="2" lg="2" >
          <Media  object src= { this.props.data.urlToImage ? this.props.data.urlToImage : techStackLogo} style={imgStyle} alt="Generic placeholder image" />
          </Col>
        </Media>
      <Col  xs="12" sm="12"  md="7" lg="7" >
      <Media body>
        <Media heading >
          {this.props.title}
        </Media>
            {this.props.data.description}
            <p>Date Published:  {realTime} </p>
        </Media>
        </Col>
        </Row>
    </Media>
        
            </Container>
        );
    }
}


export default Thread;