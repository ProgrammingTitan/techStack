import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { isNullOrUndefined } from 'util';
import '../App.css'

const StoryCard = (props) => {

    const pStyle = {
        // "white-space": "nowrap",
        float: "left",
    }
    const imgStyle = {
        maxHeight: 300,
        maxWidth: 300,
        "margin-left": "auto"
    }
    const mediaStyle = {
      color: "black",
      "text-decoration" : "none"
    }

    const titleStyle = {
      "margin-left" : "none",
      "padding-left" : "none"
    }

  return (
   <Row>
        
            {props.data.map((child, index)=> {
                var realTime = child.publishedAt.substring(0,10);
                return(    
                <Col xs="4" style={pStyle}>    
        <CardImg top className= "ml-4" width="100%" src={child.urlToImage} style={imgStyle} alt="Card image cap" />
        <CardBody style={mediaStyle}>
          <CardTitle style={titleStyle}><a style={mediaStyle} href={child.url}><b>{child.title}</b></a></CardTitle>
          <CardSubtitle>Date Published:  {realTime} </CardSubtitle>
          <CardText>{child.description}</CardText>
        </CardBody>
                </Col>     
                );
                

            })}
            
            {/* <StoryCard 
                data = {this.state.lowerData}
            /> */}
            </Row>
  );
};

export default StoryCard;