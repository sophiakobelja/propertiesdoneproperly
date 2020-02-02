import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, {Component} from 'react'
import AppBar from './components/appbar' 
import HomePage from './components/homepage'
import TestPage from './components/testpage'
import ServicesPage from './components/servicespage'
import AboutPage from './components/aboutpage'
import Carousel from 'react-image-carousel';
import './scss/styles.scss'

const HOME_PAGE_INDEX = 0
const SERVICES_PAGE_INDEX = 1
const ABOUT_PAGE_INDEX = 2

export default class IndexClass extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0
    }
  }

  setPage = (pageNum) => {
    this.setState({
      currentPage: pageNum
    })
  }

  render() {
    return (
        <div style={{width:'100%'}}>
          <div className='header-item'>
            <img src="https://propertiesdoneproper.s3.amazonaws.com/PropertiesDoneProperlyLogo.svg" className='PropertiesDoneProperImage'/>
          </div>
          <div className='page'>
              <HomePage />
          </div>
          {/*<div className='footer' />*/}
        </div>
      )
  }

  render2() {
    return (
        <div style={{width:'100%'}}>
          <div className='header-item'>
            <img src="https://propertiesdoneproper.s3.amazonaws.com/PropertiesDoneProperlyLogo.svg" className='PropertiesDoneProperImage'/>
          </div>
          <AppBar styles={styles} setPage={this.setPage}/>
          <div className='page'>
            {
              this.state.currentPage == HOME_PAGE_INDEX && 
              <HomePage />
            }
            {
              this.state.currentPage == SERVICES_PAGE_INDEX && 
              <ServicesPage />
            }
            {
              this.state.currentPage == ABOUT_PAGE_INDEX && 
              <AboutPage />
            }
          </div>
          {/*<div className='footer' />*/}
        </div>
      )
  }
}; 

const styles = {
  appBar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Verdana',
      width: '100%'
  }
}

ReactDOM.render(<IndexClass />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
