/* eslint jsx-a11y/label-has-for: 0, react/jsx-filename-extension: 0*/
import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from './styles';

class IpItem extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={styles.text} key={this.props.item}>
        <label>Connected Address : </label>
        <label id={this.props.item}><b>{this.props.item}</b></label>
      </div>
    );
  }
}

export default Radium(IpItem);
