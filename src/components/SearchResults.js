import React from 'react';
import Nav from './Navigation';
import Thread from './Thread';
import SideBar from './SideBar';
import { Container, Row, Col } from 'reactstrap';
import AmazonAds from './AmazonAds';
import BottomNav from './BottomNav';
import StoryCard from './Card';
import AdList from './admin/AdList';

class SearchResults extends React.Component{
    
    state = {
        searchString : this.props.match.match.params.id,
        data: {},
        gotData: false,
        upperData : [],
        middleData: [],
        lowerData: [],
    } 
    
    async componentDidMount(){
    const key = "be04037ec49e466087cc0901fb6ba5ec";
        const response = await fetch(`https://newsapi.org/v2/everything?q=${this.state.searchString}&apiKey=${key}`);
        const json = await response.json();
        console.log(json);
        this.setState({
            data: json.articles,
            gotData: true,
        });
        console.log(this.state.data);

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
                    <Col xs="12" sm="8" md="8" lg="8">


  
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

export default SearchResults;