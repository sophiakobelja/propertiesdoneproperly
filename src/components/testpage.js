import React, {Component} from 'react'

export default class TestPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div style={{width:'100%'}}> 
          <div id="testPage"  styles={styles.flexContainer}>
            Test Page
          </div>
        </div>
      )
  }
}

const styles = {
    flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}