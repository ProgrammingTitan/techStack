import React from 'react';
import {Container, Button, Media , Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import { getGreetings, deleteGreeting } from '../../actions/greetingActions';
import GreetingModal from './GreetingModal';
import PropTypes from 'prop-types';


class GreetingsBox extends React.Component{

    componentDidMount(){
        this.props.getGreetings();
    }

    onDeleteClick = (_id) => {
        this.props.deleteGreeting(_id);
    };

    render(){
        const { greetings }  = this.props.greeting
        return(
            <Container fluid>
            <ul>
                {greetings.map(({ _id, headline, description, imageURL}) => (
                    <div>
                    {this.props.isAuthenticated ? <Button
                    className="remove-btn"
                    color="danger"
                    size = "sm"
                    onClick = {this.onDeleteClick.bind(this, _id)}
                    >&times;</Button> : null}
                        <Media>
                        <Row>
                            <Media left href="#">
                            <Col  xs="12" sm="12" md="2" lg="2" >
                            <img src={imageURL} width="250" height="200" alt="me" />
                            </Col>
                            </Media>
                            <Col  xs="12" sm="12"  md="8" lg="8" >
                            <Media body>
                                <Media heading>
                                {headline}
                                </Media>
                                {description}
                            </Media>
                            </Col>
                            </Row>
                        </Media>
                    </div>
                ))}
            </ul>
            </Container>
        );
    }
}

GreetingsBox.propTypes = {
    getGreetings: PropTypes.func.isRequired,
    greeting: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    greeting: state.greeting,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getGreetings, deleteGreeting })(GreetingsBox);