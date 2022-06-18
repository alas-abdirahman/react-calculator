import React, { Component } from 'react'
import Buttons from './Buttons';
import './calc.css';

export default class LayoutContainer extends Component {
  render() {
    return (
        <div id='container'>
            <Buttons />
        </div>
    )
  }
}
