import React , {Fragment} from 'react';
import Nav from './../Navigation';
import {Container, Row, Col} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import GreetingsBox from '../admin/GreetingsBox';
import GreetingModal from '../admin/GreetingModal';
import HeadlineList from '../admin/HeadlineList';
import HeadlineModal from '../admin/HeadlineModal';
import AdList from '../admin/AdList';
import AdModal from '../admin/AdModal';
import UpdateList from '../admin/UpdateList';
import UpdateModal from '../admin/UpdateModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EmployeePage extends React.Component{
    
    static propTypes = {
        auth: PropTypes.object.isRequired
    };
    
    render(){
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
                <RegisterModal />
                <Logout />
                <GreetingModal />
                <GreetingsBox />
                <HeadlineModal />
                <HeadlineList />
                <AdModal />
                <AdList />
                <UpdateModal />
                <UpdateList />   
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <LoginModal />
            </Fragment>
        );

    return(
        <Container fluid>
            <Nav />
            <Container>
            { isAuthenticated ? authLinks : guestLinks}      
            </Container>  
            
        </Container>
    );
    }

};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(EmployeePage);