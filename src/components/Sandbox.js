import React from 'react'
import getWeb3 from '../utils/provider'

let transientState = {}

class Sandbox extends React.Component {
    componentWillMount() {
      this.changeState({ isConnected: 'unknown' })
    }

    render() {
        return (
            <div className="sandbox">
              <h1 className="title">Sandbox</h1>
              <h4>Is Connected</h4>
              <button onClick={this.checkIsConnected.bind(this)}>Check Status</button>&nbsp;<label>{this.state.isConnected}</label>
              <h4>Get Network ID</h4>
            </div>
        )
    }

    checkIsConnected (e) {
      this.changeState({ isConnected: getWeb3().isConnected().toString() })
    }

    changeState (values) {
      transientState = Object.assign(transientState, values)
      this.setState(transientState)
    }
}

export default Sandbox