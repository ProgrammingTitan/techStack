import React from 'react';
import Nav from './Navigation';
import Thread from './Thread';
import SideBar from './SideBar';
import { Container, Row, Col } from 'reactstrap';
import AmazonAds from './AmazonAds';
import BottomNav from './BottomNav';

import business from  '../logos/business-sub.jpg' ;
import gaming from  '../logos/gaming-sub.png' ;
import politics from  '../logos/politics-sub.jpg' ;
import sports from  '../logos/sports-sub.jpg' ;
import tech from  '../logos/tech-sub.png' ;
import USA from  '../logos/USA-sub.png' ;
import world from  '../logos/world-sub.jpg' ;

class CategoryPage extends React.Component{


    constructor(props) {

        super(props);
        this.state = {
            data: {},
            gotData: false,
            inputText: '',
            category : this.props.match.match.params.id,
            logo: undefined
        };
    }
    
    async componentDidMount() {
       
        const key = "be04037ec49e466087cc0901fb6ba5ec";
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=${key}`);
        const json = await response.json();
        console.log(json);
        this.setState({
            data: json.articles,
            gotData: true,
            
        });


        

    }

render(){
    return(
        <Container fluid>
            <Nav /> 
            
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <SideBar/>
                        
                    </Col>
                     <Col xs="12" sm="8" md="8" lg="8">
            {
                        this.state.gotData && this.state.data.map((child, index) => {
                            const { data } = child;
                            return (
                                
                                    <Thread
                                        key={child.index}
                                        title={child.title}
                                        data={child}
                                    />
                                    
                            );
                        })
                    }
                <AmazonAds />
                </Col>
                </Row>
                <BottomNav />
                </Container>
    );
}


}

export default CategoryPage;