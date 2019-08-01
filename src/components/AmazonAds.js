import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import minecraftPillow from '../amazonPics/Minecraft-Pillow.jpg';
import carCharger from '../amazonPics/Car-Charger.png';
import wirelessCharger from '../amazonPics/Wireless-Charger.png';

const carStyles={
  "margin" : "auto"
}

const imgStyle = {
  maxHeight: 600,
  maxWidth: 600
}

const items = [
  {
    src: minecraftPillow,
    altText: 'Razteca Vendors',
    caption: 'Minecraft Sequin Pillow',
    link: 'https://www.amazon.com/dp/B07RF9CLSS?ref=myi_title_dp'
  },
  {
    src: carCharger,
    altText: 'Razteca Vendors',
    caption: '3.1A Dual USB Car Charger',
    link: 'https://www.amazon.com/dp/B07ML5BN9M?ref=myi_title_dp'
  },
  {
    src: wirelessCharger,
    altText: 'Razteca Vendors',
    caption: 'Wireless 5W Charging Pad',
    link: 'https://www.amazon.com/dp/B07MDQ32RJ?ref=myi_title_dp'
  }
];

class AmazonAds extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        > 
          <img src={item.src} alt={item.altText} style={imgStyle} align="left"/>
          <a href={item.link}><CarouselCaption className="text-info" captionText={item.altText} captionHeader={item.caption} /></a>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        style={carStyles}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default AmazonAds;