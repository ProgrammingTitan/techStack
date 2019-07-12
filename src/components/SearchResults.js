import React from 'react';
import Nav from './Navigation';
import Thread from './Thread';
import SideBar from './SideBar';
import { Container, Row, Col } from 'reactstrap';
import AmazonAds from './AmazonAds';
import BottomNav from './BottomNav';

class SearchResults extends React.Component{
    
    state = {
        searchString : this.props.match.match.params.id,
        data: {},
        gotData: false
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
        console.log(this.state.searchString);
    }
    
    render(){
        return(
            <div>
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
                                        // points={data.score}
                                        // comments={data.num_comments}
                                        // subreddit={data.subreddit_name_prefixed}
                                        // user={data.author}
                                        data={child}
                                        // img = {this.state.logo}
                                    />
                                    
                            );
                        })
                    }
                <AmazonAds />
                </Col>
                </Row>
                <BottomNav />
                </Container>
            </div>

        );
    }




}

export default SearchResults;