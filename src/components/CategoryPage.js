import React from 'react';
import Nav from './Navigation';
import StoryCard from './Card';
import Thread from './Thread';
import SideBar from './SideBar';
import AdList from './admin/AdList';
import { Container, Row, Col } from 'reactstrap';
import AmazonAds from './AmazonAds';
import BottomNav from './BottomNav';
import CategoryJumbo from './CategoryJumbo';

import business from  '../logos/business-sub.jpg' ;
import gaming from  '../logos/gaming-sub.png' ;
import politics from  '../logos/politics-sub.jpg' ;
import sports from  '../logos/sports-sub.jpg' ;
import tech from  '../logos/tech-sub.png' ;
import USA from  '../logos/USA-sub.png' ;
import world from  '../logos/world-sub.jpg' ;
import { runInThisContext } from 'vm';

class CategoryPage extends React.Component{


    constructor(props) {

        super(props);
        this.state = {
            data: {},
            upperData : [],
            middleData: [],
            lowerData: [],
            upper: {},
            lower: {},
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
        console.log(json.articles);
        this.setState({
            data: json.articles,
            gotData: true
            
        });

        this.state.data.map((child, index) => {
            if(index < 6){this.state.lowerData.push(child);}
            else if (index < 14){this.state.middleData.push(child);}
            else{this.state.upperData.push(child);}

        })
        
        this.setState({
            upperData: this.state.upperData,
            lowerData: this.state.lowerData,
            middleData: this.state.middleData
        });


        console.log(this.state.lowerData);
        

        

    }

render(){
    

    return(
        <Container fluid>
            <Nav /> 
            
                <StoryCard 
                    data = {this.state.lowerData}
                />
            
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <SideBar/>
                    </Col>
                    <Col xs="12" sm="12" md="8" lg="8">


  
            {
                        this.state.gotData && this.state.middleData.map((child, index) => {
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
                </Col>
                </Row>
                <Row>
                
                <CategoryJumbo searchString = {this.state.category} />
                <StoryCard 
                    data = {this.state.upperData}
                />
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
}


}

export default CategoryPage;