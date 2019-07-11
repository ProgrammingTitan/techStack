import React from 'react';
import {Container, Button, Media } from 'reactstrap';
import { connect } from 'react-redux';
import { getUpdates, deleteUpdate } from './../../actions/updateActions';
import UpdateModal from './UpdateModal';
import PropTypes from 'prop-types';


class UpdateList extends React.Component{

    componentDidMount(){
        this.props.getUpdates();
    }

    onDeleteClick = (_id) => {
        this.props.deleteUpdate(_id);
    };

    render(){
        const { updates }  = this.props.update
        return(
            <Container>
            <ul>
                {updates.map(({ _id, headline, description}) => (
                    <div>
                    {this.props.isAuthenticated ? <Button
                    className="remove-btn"
                    color="danger"
                    size = "sm"
                    onClick = {this.onDeleteClick.bind(this, _id)}
                    >&times;</Button> : null}
                        <h3>{headline}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </ul>
            </Container>
        );
    }
}

UpdateList.propTypes = {
    getUpdates: PropTypes.func.isRequired,
    update: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    update: state.update,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getUpdates, deleteUpdate })(UpdateList);