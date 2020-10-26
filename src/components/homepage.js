import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Divider from '@material-ui/core/Divider';

export default class HomePage extends Component {
  render() {
    return (
      <div className="pageItem" style={{ ...this.props.style }}>
        <Carousel
          autoPlay={false}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <div style={{ position: 'relative' }}>
            <div className="slide1-text">
              <p style={{ fontSize: '2vw', marginBottom: '0px' }}>
                Thank you for choosing
              </p>
              <p style={{ fontSize: '2.5vw', marginTop: '2px' }}>
                Properties Done Properly
              </p>
            </div>
            <img src="https://propertiesdoneproper.s3.amazonaws.com/Slideshow1.png" />
          </div>
          <div style={{ position: 'relative' }}>
            <div className="slide2-text">
              <p style={{ fontSize: '2.5vw' }}>
                {' '}
                Selling your home can be stressful and seem impossible{' '}
              </p>
            </div>
            <img src="https://propertiesdoneproper.s3.amazonaws.com/Slideshow2.png" />
          </div>
          <div style={{ position: 'relative' }}>
            <div className="slide3-text">
              <p
                style={{ fontSize: '1.75vw', margin: '2px', textAlign: 'left' }}
              >
                You may need to:
              </p>
              <ul>
                <li style={{ listStyleType: 'none' }}>
                  {' '}
                  - Pay commissions to a Real Estate Agent{' '}
                </li>
                <li style={{ listStyleType: 'none' }}>
                  {' '}
                  - Wait 60-120 days to get your money for your house
                </li>
              </ul>
            </div>
            <img src="https://propertiesdoneproper.s3.amazonaws.com/Slideshow3.png" />
          </div>
          <div style={{ position: 'relative' }}>
            <div className="slide4-text">
              <p className="header">Let us help you!</p>
              <div className="info">
                <p
                  style={{
                    fontSize: '1.75vw',
                    marginBottom: '2px',
                    textAlign: 'left'
                  }}
                >
                  We provide a solution to your problem
                </p>
                <div>
                  <ul>
                    <li style={{ listStyleType: 'none' }}>
                      We purchase your home as is
                    </li>
                    <li style={{ listStyleType: 'none' }}>
                      We will ensure that you get your money in less than 30
                      days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img src="https://propertiesdoneproper.s3.amazonaws.com/Slideshow4.png" />
          </div>
        </Carousel>
      </div>
    );
  }
  render2() {
    return (
      <div
        className="pageItem"
        style={{ ...this.props.style, textAlign: 'center' }}
      >
        <div>
          <p style={{ fontSize: '2vw', marginBottom: '0px' }}>
            Thank you for choosing
          </p>
          <p style={{ fontSize: '3vw', margin: '0px' }}>
            Properties Done Properly
          </p>
          <img
            style={{ width: '80%' }}
            src="https://propertiesdoneproper.s3.amazonaws.com/Slideshow1.png"
          />
          <br />
          <p style={{ fontSize: '2.5vw', margin: '0px' }}>
            Website Under Construction
          </p>
          <p style={{ fontSize: '3vw', margin: '0px' }}>COMING SOON</p>
        </div>
      </div>
    );
  }
}
