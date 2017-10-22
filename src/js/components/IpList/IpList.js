import React, { Component } from 'react'; // eslint-disable-line import/newline-after-import
import { styles } from './styles'; // eslint-disable-line import/first
import IpItem from '../IpItem/IpItem';
import Radium from 'radium'; // eslint-disable-line import/first

@Radium
export default class IpList extends Component {
  _getListItems() {
    return this.props.items.map((item) => {
      if (item) {
       // eslint-disable-next-line react/jsx-filename-extension
        return <IpItem key={item} item={item} />;
      } else { // eslint-disable-line no-else-return
        return null;
      }
    });
  }

  render() {
    const listItems = this._getListItems(); // eslint-disable-line no-underscore-dangle

    return (
      <div style={styles.wrapper}> {listItems} </div>
    );
  }
}

