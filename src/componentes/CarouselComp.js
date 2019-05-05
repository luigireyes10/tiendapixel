import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class CarouselComp extends Component {
    render() {
      return (
        <div className="App">
        <Carousel
        slidesToScroll={6}
        slidesToShow={6} 
        cellSpacing={0}
        wrapAround='true'>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
        </div>
      );
    }
  }
  
  export default CarouselComp;