import React, { Component } from 'react'
import { connect } from "react-redux"
import { addNum, subNum, addAsync } from "../redux/redux"

@connect(
  state => ({ newState: state}),
  { addNum, subNum, addAsync}
)

class Aa extends Component {
  render() {
    return (
      <div>
        {this.props.newState}
      </div>
    )
  }
}
export default Aa