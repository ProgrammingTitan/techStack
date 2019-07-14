import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { isNullOrUndefined } from 'util';

const StoryCard = (props) => {

    const pStyle = {
        // "white-space": "nowrap",
        float: "left",
    }
    const imgStyle = {
        maxHeight: 300,
        maxWidth: 300
    }
    

  return (
   <Row>
        
            {props.data.map((child, index)=> {
                var realTime = child.publishedAt.substring(0,10);
                return(    
                <Col xs="4" style={pStyle}>    
                 <a href={child.url}>
        <CardImg top width="100%" src={child.urlToImage} style={imgStyle} alt="Card image cap" />
        <CardBody>
          <CardTitle>{child.title}</CardTitle>
          <CardSubtitle>Date Published:  {realTime} </CardSubtitle>
          <CardText>{child.description}</CardText>
        </CardBody>
    </a>
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