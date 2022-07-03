import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner

//API KEY 04f8e70122e04e1ebd2c0ab9464a53c1
