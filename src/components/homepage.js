import React, {Component} from 'react'
// import Carousel from 'react-image-carousel';
import Slider from 'infinite-react-carousel';

export default class HomePage extends Component {

  render() {
    let images = [
      'https://propertiesdoneproper.s3.amazonaws.com/Slideshow1.png',
      'https://propertiesdoneproper.s3.amazonaws.com/Slideshow2.png',
      'https://propertiesdoneproper.s3.amazonaws.com/Slideshow3.png',
      'https://propertiesdoneproper.s3.amazonaws.com/Slideshow4.png'
  ];
    return (
        <div className='homepage' style={{...this.props.style}}>
            <Slider>
                <img src='https://propertiesdoneproper.s3.amazonaws.com/Slideshow1.png' />
                <img src='https://propertiesdoneproper.s3.amazonaws.com/Slideshow2.png' />
            </Slider>
        </div>
        
      )
  }
};

{/*<div className='homepage' style={{...this.props.style}}>
            <Carousel images={images} 
                    thumb={true}
                    loop={true}
                    autoplay={3000}/>
        </div>*/}