import React from 'react';
import {Container, Button, Media } from 'reactstrap';
import { connect } from 'react-redux';
import { getHeadlines, deleteHeadline } from './../../actions/headlineActions';
import HeadlineModal from './HeadlineModal';
import PropTypes from 'prop-types';


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
            <Container>
            <ul>
                {headlines.map(({ _id, headline, description, imageURL}) => (
                    <div>
                    {this.props.isAuthenticated ? <Button
                    className="remove-btn"
                    color="danger"
                    size = "sm"
                    onClick = {this.onDeleteClick.bind(this, _id)}
                    >&times;</Button> : null}
                        <Media>
                            <Media left href="#">
                            <img src={imageURL} width="250" height="200" alt="me" />
                            </Media>
                            <Media body>
                                <Media heading>
                                {headline}
                                </Media>
                                {description}
                            </Media>
                        </Media>
                    </div>
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