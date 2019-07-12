import React from 'react';
import Nav from './Navigation';
import {Container, Row, Col} from 'reactstrap';
import {NavItem, NavLink} from 'reactstrap';
import AmazonAds from './AmazonAds';
import GreetingsBox from './admin/GreetingsBox';
import HeadlineList from './admin/HeadlineList';
import AdList from './admin/AdList';
import UpdateList from './admin/UpdateList';
import BottomNav from './BottomNav';

const MainPage = () => {
    return(
        <Container fluid>
            <Nav />
            <Row>
            <p>Home Page</p>
            </Row>
            <Row>
            <Col xs="12" sm="6" md="6" lg="6">
            <AmazonAds />
            </Col>
            <p>hi</p>
            </Row>
            <GreetingsBox />
            <HeadlineList />
            <AdList />
            <UpdateList />
            <BottomNav />
        </Container>
    );
};

export default MainPage;