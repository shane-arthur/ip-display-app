
import React, { Component } from 'react';
import { styles } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class LastSelectedIpWidget extends Component {

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div style={styles.header}>
        <p style={styles.text}>Last IP to enter app: </p>
        <p style={styles.text}>{this.props.lastItem} </p>
      </div>
    );
  }
}

