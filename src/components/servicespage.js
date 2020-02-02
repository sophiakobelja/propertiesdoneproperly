import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export default class ServicesPage extends Component {

  constructor(props) {
    super(props)
  }

  render3() {
    return (
        <div className='pageItem'> 
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <img src='https://propertiesdoneproper.s3.amazonaws.com/Services2.png' />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div>
                        <p>
                            Selling your home using the traditional process can be 
                            COSTLY, TIME-INTENSIVE, and STRESSFUL
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <p>
                        We provide CASH and PEACE OF MIND for homeowners who don't have 
                        the resources or don't want to use their resources to pursue the traditional 
                        method of selling their home 
                    </p>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <div>
                        We will buy your home regardless of: 
                    </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div>
                        Needed Repairs
                        <br/>
                        Owed Liens
                        <br />
                        Owed Taxes
                        <br />
                    </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div>
                        Vacant home
                        <br />
                        Code Violations 
                        <br />
                        NO MONEY
                        <br />
                    </div>
                </Grid>
            </Grid>
        </div>
      )
  }

  render2() {
    return (
        <div className='pageItem'> 
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <img src='https://propertiesdoneproper.s3.amazonaws.com/Services2.png' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div>
                        <p>
                            Selling your home using the traditional process can be 
                            COSTLY, TIME-INTENSIVE, and STRESSFUL
                        </p>
                        <p>
                            We provide CASH and PEACE OF MIND for homeowners who don't have 
                            the resources or don't want to use their resources to pursue the traditional 
                            method of selling their home 
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container spacing={2}> 
                        <Grid item xs={12} sm={12}>
                            <div>
                                We will buy your home regardless of: 
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>
                                Needed Repairs
                                <br/>
                                Owed Liens
                                <br />
                                Owed Taxes
                                <br />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>
                                Vacant home
                                <br />
                                Code Violations 
                                <br />
                                NO MONEY
                                <br />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
      )
  }

  render() {
    return (
        <div className='pageItem'>
            <img src='https://propertiesdoneproper.s3.amazonaws.com/Services2.png' />
            <Divider />
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <div>
                        <p>
                            Selling your home using the traditional process can be 
                            COSTLY, TIME-INTENSIVE, and STRESSFUL
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <p>
                        We provide CASH and PEACE OF MIND for homeowners who don't have 
                        the resources or don't want to use their resources to pursue the traditional 
                        method of selling their home 
                    </p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid item xs={12} sm={12}>
                        <div>
                            We will buy your home regardless of: 
                        </div>
                        <Grid container items={2}>
                            <Grid item xs={6} sm={6}>
                                <div>
                                    Needed Repairs
                                    <br/>
                                    Owed Liens
                                    <br />
                                    Owed Taxes
                                    <br />
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <div>
                                    Vacant home
                                    <br />
                                    Code Violations 
                                    <br />
                                    NO MONEY
                                    <br />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
      )
  }
}