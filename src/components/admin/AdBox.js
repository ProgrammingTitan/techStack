import React from 'react';
import { Card, CardImg, CardBody, 
  CardTitle, CardSubtitle } from 'reactstrap';
import { getAds, deleteAd } from './../../actions/adActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const imgStyle = {
  maxHeight: 300,
  maxWidth: 300,
  "margin-left": "auto"
}
const mediaStyle = {
  color: "black",
  "text-decoration" : "none"
}

const titleStyle = {
  "margin-left" : "none",
  "padding-left" : "none"
}

class AdBox extends React.Component{

    state={
        singleAd : [null ]
    }

    componentDidMount(){
        this.props.getAds();     
    }


    render(){
        const { ads }  = this.props.ad;

        // ads.map((item,index) =>{
            
        //     if(index < 1){
        //         this.state.singleAd.push(ads.pop())}
        //     else{}
        // })

        

  return (
    
    <div>
      {
              ads.map((item,index) =>{
            
            if(index === 1){ return (
              <Card>
                 <CardImg top className= "ml-4" width="100%" src={item.imageURL} style={imgStyle} alt="Card image cap" />
        <CardBody style={mediaStyle}>
        <CardTitle style={titleStyle}><a style={mediaStyle} href={item.url}><b>{item.headline}</b></a></CardTitle>
          <CardSubtitle>{item.description}</CardSubtitle>
        </CardBody>
      </Card>)
                
            }
            else{}
        })

      }
      
    </div>
  );}
}

AdBox.propTypes = {
    getAds: PropTypes.func.isRequired,
    ad: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    ad: state.ad,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getAds, deleteAd })(AdBox);