import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import '../../assets/App.css'
import { Link } from '@reach/router'
interface Props {
  mbx_appstore: {
    getAppName: string
    setAppName: Function
  }
}

@inject('mbx_appstore')
@observer
export default class About extends Component<Props> {
  render() {
    return (
      <div className="App">
        <h1>App Name: {this.props.mbx_appstore.getAppName}</h1>
        <h1>About Page</h1>
        <Link to="..">Back</Link>
      </div>
    )
  }
}
