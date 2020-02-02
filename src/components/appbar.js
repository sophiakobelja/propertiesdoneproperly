import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class AppBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  tabClicked = (e, val) => {
      this.props.setPage(val)
      this.setState({
          currentTab: val
      })
  }

  render() {
    return (
      <div style={{width:'100%', height: '100%'}}> 
        <div style={this.props.styles.appBar}>
          <Tabs
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
          </Tabs>
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