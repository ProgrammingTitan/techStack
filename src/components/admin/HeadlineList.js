import React from 'react';
import {Container, Button, Media, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getHeadlines, deleteHeadline } from './../../actions/headlineActions';
import HeadlineModal from './HeadlineModal';
import PropTypes from 'prop-types';

    const imgStyle = {
    maxHeight: 300,
    maxWidth: 300
  }

  const mediaStyle = {
    color: "black",
    "text-decoration" : "none",
    margin: "auto",
    "margin-left" : "none"
}

class HeadlineList extends React.Component{

    componentDidMount(){
        this.props.getHeadlines();
    }

    onDeleteClick = (_id) => {
        this.props.deleteHeadline(_id);
    };

    render(){

        const { headlines }  = this.props.headline
        return(
            <Container fluid>
            <ul>
                {headlines.map(({ _id, headline, description, imageURL,url}) => (
                    <div>
                        {this.props.isAuthenticated ? <Button
                    className="remove-btn"
                    color="danger"
                    size = "sm"
                    onClick = {this.onDeleteClick.bind(this, _id)}
                    >&times;</Button> : null}
                        <Media className= "mb-4" href={url} style={mediaStyle}>
                            <Row>
      <Media left href={url}>
      <Col  xs="12" sm="12" md="2" lg="2" >
        <Media  className= "mr-auto" object src={imageURL} style={imgStyle} alt="Generic placeholder image" />
      </Col>
      </Media>
      <Col  xs="12" sm="12"  md="7" lg="7" >
      <Media body>
        <Media heading >
          {headline}
        </Media>
            {description}
        </Media>
        </Col>
        </Row>
    </Media>
                    </div>
                    //     <a href={url}> 
                    // {this.props.isAuthenticated ? <Button
                    // className="remove-btn"
                    // color="danger"
                    // size = "sm"
                    // onClick = {this.onDeleteClick.bind(this, _id)}
                    // >&times;</Button> : null}
                    //     <Media>
                    //         <Media left href="#">
                    //         <img src={imageURL} width="250" height="200" alt="me" />
                    //         </Media>
                    //         <Media body>
                    //             <Media heading>
                    //             {headline}
                    //             </Media>
                    //             {description}
                    //         </Media>
                    //     </Media>
                    //     </a>
                    // </div>
                ))}
            </ul>
            </Container>
        );
    }
}

HeadlineList.propTypes = {
    getHeadlines: PropTypes.func.isRequired,
    headline: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    headline: state.headline,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getHeadlines, deleteHeadline })(HeadlineList);