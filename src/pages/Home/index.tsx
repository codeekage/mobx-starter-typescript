import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { autorun } from 'mobx'
import logo from '../../logo.svg'
import mobx from '../../mobx.svg'
import '../../assests/App.css'
import {Link} from "@reach/router"
interface Props {
  mbx_appstore: {
    getAppName: string
    setAppName: Function
  }
}

@inject('mbx_appstore')
@observer
export default class Home extends Component<Props> {
  constructor(props: any) {
    super(props)
    autorun(() => console.log('AutoRun', this.props.mbx_appstore.getAppName))
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e: any) {
    e.preventDefault()
    this.props.mbx_appstore.setAppName(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{display: "inline-block"}}>
          <Link to="/about">About</Link>
          { ' | ' }
          <Link to="/contact">Contact </Link>
          </div>
          <h1>{this.props.mbx_appstore.getAppName}</h1>
          <div style={{ display: 'inline-block' }}>
            <img src={logo} className="App-logo" alt="react-logo" />
            <img src={mobx} className="App-logo" alt="mobx-logo" />
          </div>
          <p>
            Edit Application Name by Typing in the Box Below!
          </p>
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input
            className="input-field"
            value={this.props.mbx_appstore.getAppName}
            onChange={this.handleOnChange}
          />
        </header>
      </div>
    )
  }
}
