import React from 'react';
import {Container, Button, Media } from 'reactstrap';
import { connect } from 'react-redux';
import { getAds, deleteAd } from './../../actions/adActions';
import AdModal from './AdModal';
import PropTypes from 'prop-types';


class AdList extends React.Component{

    componentDidMount(){
        this.props.getAds();
    }

    onDeleteClick = (_id) => {
        this.props.deleteAd(_id);
    };

    render(){
        const { ads }  = this.props.ad
        return(
            <Container>
            <ul>
                {ads.map(({ _id, headline, description, imageURL}) => (
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

AdList.propTypes = {
    getAds: PropTypes.func.isRequired,
    ad: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    ad: state.ad,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getAds, deleteAd })(AdList);