import React, {Fragment} from 'react';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import {logout} from '../../../actions/authActions';
import PropTypes from 'prop-types';


class Logout extends React.Component{

    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render(){
        return(
            <Fragment>
                <Button 
                    onClick= {this.props.logout}
                >
                    Logout
                </Button>
            </Fragment>
        )
    }

}

export default connect(null, {logout})(Logout);