import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import AdDeleteButton from './AdDeleteButton';




class AmazonAds extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
        items : [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount(){
    this.setState({items: this.props.ads});
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.ads.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.ads.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
 
    console.log(this.state.items);
    console.log(this.props.ads);
    const slides = this.props.ads.map((item) => {
      return (
        
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item._id}
        >
                
          <img src={item.imageURL} alt={item.description} height="450" width="650" align="right"/>
          <a href="#"><CarouselCaption className="text-info" captionText={item.description} captionHeader={item.headline} /></a>
        
          
        </CarouselItem>
        
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.props.ads} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default AmazonAds;