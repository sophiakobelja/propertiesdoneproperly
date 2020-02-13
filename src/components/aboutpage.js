import React, {Component} from 'react'
import Divider from '@material-ui/core/Divider';

export default class AboutPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className='pageItem'> 
            <div className='containerRow'>
                <img src='https://propertiesdoneproper.s3.amazonaws.com/AboutImage.jpeg' style={{width: '60%', height: '60%', margin: '0px', padding: '0px'}}/>
                <div className='padding' />
                <div>
                    <span style={{fontSize: '24px'}}>Proper</span>
                    <div>
                        <span style={{fontStyle: 'italic'}}>adjective </span>
                    </div>
                    Truly what something is said or regarded to be; genuine
                    <div>
                        <h3> Our Core Values </h3>
                        <p>
                            Proper service is what everyone deserves. We provide this by demonstrating
                            honesty, integrity, and professionalim at all times.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <Divider />
            <br />
            <div className='aboutPageGrid'>
                <div>
                    <h3> Our Team </h3>
                    <p>
                        We are a team of investors dedicated to solving the problems
                        many homeowners face when selling their homes.
                        We are passionate about helping homeowners because we know what 
                        it's like--many of us have come from very similar situations. 
                        Our purpose extends beyond investing--we take the time to 
                        understand your needs and address every situation individually.
                         
                    </p>
                </div>
                <div>
                    <h3> Our Promise to You </h3>
                    <p>
                        We close fast
                        <br/>
                        We take care of closing costs 
                        <br/>
                        We will deliver your money in 45 days or less 
                        <br/>
                        We put the proper in property
                    </p>
                </div>
            </div>
            We know you have waited long enough
            <br />
            Let us help you get this done properly
            <h2> 
                <a onClick={() => {alert("hi")}}>Contact us</a>! We'd love to help in any way we can!
            </h2>
        </div>
      )
  }
}