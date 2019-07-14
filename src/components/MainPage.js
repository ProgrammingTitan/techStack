import React from 'react';
import Nav from './Navigation';
import {Container, Row, Col} from 'reactstrap';
import {NavItem, NavLink} from 'reactstrap';
import AmazonAds from './AmazonAds';
import GreetingsBox from './admin/GreetingsBox';
import HeadlineList from './admin/HeadlineList';
import SideBar from './SideBar';
import AdList from './admin/AdList';
import AdCarousel from './admin/AdCarousel';
import UpdateList from './admin/UpdateList';
import BottomNav from './BottomNav';

const MainPage = () => {
    return(
        <Container fluid>
            <Nav />
            <Row>
            <Col xs="12" sm="4" md="4" lg="4">
            <UpdateList />
            </Col> 
            <Col xs="12" sm="8" md="8" lg="8">
            <GreetingsBox />
            </Col>
            </Row>
            
            <Row>
            <Col xs="12" sm="8" md="8" lg="8">
                <HeadlineList />
            </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <SideBar/>
                    </Col>
            </Row>
            <Row>
            <Col xs="12" sm="6" md="6" lg="6">
            <AmazonAds />
            </Col>
            <Col xs="12" sm="6" md="6" lg="6">
            <AdList />
            </Col>
            </Row>
            <BottomNav />
        </Container>
    );
};

export default MainPage;