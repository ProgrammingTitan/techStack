import React from 'react';
import Nav from './Navigation';
import Thread from './Thread';
import SideBar from './SideBar';
import business from  '../logos/business-sub.jpg' ;
import gaming from  '../logos/gaming-sub.png' ;
import politics from  '../logos/politics-sub.jpg' ;
import sports from  '../logos/sports-sub.jpg' ;
import tech from  '../logos/tech-sub.png' ;
import USA from  '../logos/USA-sub.png' ;
import world from  '../logos/world-sub.jpg' ;
import { Container, Row, Col } from 'reactstrap';
import AmazonAds from './AmazonAds';


class CategoryPage extends React.Component{


    constructor(props) {

        super(props);
        this.state = {
            data: {},
            gotData: false,
            inputText: '',
            subreddit : this.props.subreddit,
            logo: undefined
        };
    }
    
    async componentDidMount() {

        switch(this.state.subreddit)
        {
            case 'USNEWS':
                this.state.logo = USA;
                break;
            case 'worldnews':
                this.state.logo = world;
                break;
            case 'politics':
                this.state.logo = politics;
                break;
            case 'business':
                this.state.logo = business;
                break;
            case 'technews':
                this.state.logo = tech;
                break;
            case 'sports':
                this.state.logo = sports;
                break;
            case 'gamernews':
                this.state.logo = gaming;
                break;
            default:
                this.state.logo = undefined;
                break;
            
        }

        

        const key = "be04037ec49e466087cc0901fb6ba5ec";
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.subreddit}&apiKey=${key}`);
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

                </Container>
    );
}


}

export default CategoryPage;