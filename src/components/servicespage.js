import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export default class ServicesPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className='pageItem'> 
            <div className='pageBanner'>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <span></span>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='servicesImageContainer'>
                <p class="servicesImageText"> We provide 
                    <br />
                    <span style={{fontSize: '5vw'}}>CASH</span>
                    <br /> and <br /> 
                    <span style= {{width: '100%', fontSize: '3.5vw'}}>
                        PEACE OF MIND
                    </span> <br/>to ANY homeowner
                </p>
                <img src='https://propertiesdoneproper.s3.amazonaws.com/Services2.png' />
            </div>
            <Divider />
            <div style={{textAlign: 'center', fontSize: '4vw'}}>
                We will buy your home regardless of: 
            </div>
            <div class="grid">
                <div class="grid__item">
                    <div class="content">
                    <div class="content-inside">
                        <div>
                            Needed Repairs
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__item">
                    <div class="content">
                    <div class="content-inside">
                        <div>
                            Owed Liens
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__item">
                    <div class="content content-lr">
                    <div class="content-inside">
                        <div>
                            Owed Taxes
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__item">
                    <div class="content content-lr">
                    <div class="content-inside">
                        <div>
                            Code Violations 
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__item">
                    <div class="content content-lr">
                    <div class="content-inside">
                        <div>
                            Owed Taxes
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__item">
                    <div class="content content-lr">
                    <div class="content-inside">
                        <div>
                            NO MONEY
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }
}


            