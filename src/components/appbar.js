import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

export default class AppBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  tabClicked = (val) => {
      this.props.setPage(val)
      this.setState({
          currentTab: val
      })
  }

  render() {
    return (
      <div style={{width:'100%', height: '100%'}} className='appBarContainer'> 
        <div >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <img src="https://propertiesdoneproper.s3.amazonaws.com/PropertiesDoneProperlyLogo.png" 
                   className='PropertiesDoneProperImage'
                   onClick={() => this.tabClicked(0)}/>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className='navBarContainer'>
                <button className={this.state.currentTab == 1 ? 'selected': ''} onClick={() => this.tabClicked(1)}>Services</button>
                <button className={this.state.currentTab == 2 ? 'selected': ''} onClick={() => this.tabClicked(2)}>About</button>
                <button className={this.state.currentTab == 3 ? 'selected': ''} onClick={() => this.tabClicked(3)}>Referrals</button>
                <button className={this.state.currentTab == 4 ? 'selected': ''} onClick={() => this.tabClicked(4)}>Contact</button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

const styles = {
    tabsStyle: {
        minWidth: '0px',
        fontSize: '12px',
    },
    tabStyle: {
        fontSize: '12px'
    }
}

{/*<Tabs
                  value={this.state.currentTab}
                  onChange={this.tabClicked}
                  style={styles.tabsStyle}
                  indicatorColor="primary"
                  variant='fullWidth'>
                  <Tab style={styles.tabStyle} label="Home" value={0}/>
                  <Tab style={styles.tabStyle} label="Services" value={1}/>
                  <Tab style={styles.tabStyle} label="About" value={2}/>
                  <Tab style={styles.tabStyle} label="Referrals" value={3}/>
                  <Tab style={styles.tabStyle} label="Contact" value={4}/>
                </Tabs>*/}