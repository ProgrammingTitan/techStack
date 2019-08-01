import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';



class SideBar extends React.Component{


    state = {
        gotData: false,
        data: []
    }

    async componentDidMount() {
    const key = "be04037ec49e466087cc0901fb6ba5ec";

    var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            `apiKey=${key}`;

        const response = await fetch(url);
        const json = await response.json();

        this.setState({data : json.articles,
                        gotData : true});
    }

    
    render(){
        const mediaStyle = {
            color: "black",
            "text-decoration" : "none",
            margin: "auto"
          }
          
        return(
        <div>
            <ListGroup>
                {
                        this.state.gotData && this.state.data.map((child, index) => {
                            const { data } = child;
                            return (
                                <ListGroupItem><a className="link" href={child.url} style={mediaStyle}>{child.title}</a></ListGroupItem>
                            );
                        })
                 }
            </ListGroup>
        </div>
        );
    }

}

export default SideBar;