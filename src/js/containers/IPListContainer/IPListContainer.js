/* eslint no-undef : 0, react/jsx-filename-extension: 0 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendData } from '../../data/dataFetcher';
import React, { Component } from 'react'; // eslint-disable-line import/first
import { StyleRoot } from 'radium'; // eslint-disable-line import/first
import * as ViewActions from '../../actions';
import { apiMappings } from '../../constants/other-constants/ApiMappings';
import IpList from '../../components/IpList/IpList';
import LastSelectedIpWidget from '../../components/LastSelectedIpWidget/LastSelectedIpWidget';
import { styles } from './styles';

const io = require('socket.io-client');

const socket = io('http://localhost:3000');

class IPListContainer extends Component {

  static fetchData() {
    const data = { isAddIp: true };
    return sendData(apiMappings.ADD_REMOVE_IP, data);
  }

  componentDidMount() {
    // eslint-disable-next-line arrow-body-style
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault();
      return this.props.actions.removeIpAddress(socket);
    });
    if (this.props && this.props.actions && (typeof socket !== 'undefined')) {
      this.props.actions.addIpAddress(socket);
    }
    socket.on('RemoveIpItemFromList', (data) => {
      const { ipAddress } = data;
      this.props.actions.removeIpAddressFromState(ipAddress);
    });
    socket.on('AddIpItemToList', (data) => {
      this.props.actions.addIpAddressToState(data);
    });
  }

  _showIpData() {
    const ipData = (<div><LastSelectedIpWidget
      lastItem={this.props.items[this.props.items.length - 1]}
    />
      <IpList
        items={this.props.items}
      />)</div>);
    if (this.props && this.props.items && this.props.items.length > 0) {
      return ipData;
      // eslint-disable-next-line no-else-return
    } else {
      // eslint-disable-next-line max-len, react/no-unescaped-entities
      return null;
    }
  }

  render() {
    // eslint-disable-next-line no-underscore-dangle
    const data = this._showIpData();
    // eslint-disable-next-line react/jsx-filename-extension
    return (<StyleRoot>
      <div style={styles.wrapper}>
        {data}
      </div>
    </StyleRoot>
    );
  }
}

function
mapStateToProps(state) {
  return {
    items: state.items.activeIps,
  };
}

function
mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ViewActions, dispatch),
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(IPListContainer);
