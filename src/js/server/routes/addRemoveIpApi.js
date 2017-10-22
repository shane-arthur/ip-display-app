/* eslint max-len: 0*/
import { Promise } from 'bluebird';
import Items from '../models/ip-list';
import getIp from './utils/IpListUtil';
import sendDataForAddRemoveIpMock from './mockAddRemoveIpApi';

/* istanbul ignore next */
const sendAddIpDataToClient = (isAddIp, res) => {
  Promise.all([Items.find(), getIp()]).then((result) => {
    const itemsCollection = result[0];
    const ipAddress = result[1];
    if (isAddIp) {
      if (!itemsCollection[0].activeIps.includes(ipAddress)) {
        itemsCollection[0].activeIps.push(ipAddress);
        itemsCollection[0].save().then(() => {
          console.log(`sucess adding new ip : ${ipAddress}`);
        }).catch((error) => {
          console.log(`error saving ip address to add : ${error}`);
        });
      }
      return res.status(200).send({ items: { activeIps: itemsCollection[0].activeIps } });
    } else { // eslint-disable-line no-else-return
      const filteredItems = itemsCollection[0].activeIps.filter(item =>
        item !== ipAddress,
      );
      itemsCollection[0].activeIps = filteredItems;
      itemsCollection[0].save().then(() => {
        console.log(`sucess removing new ip : ${ipAddress}`);
      }).catch((error) => {
        console.log(`error saving ip address to add : ${error}`);
      });
      console.log(`api call !! : ${itemsCollection}`);
      return res.status(200).send({ ipAddress, items: { activeIps: itemsCollection.activeIps } });
    }
  }).catch((error) => {
    console.log(`there was an error fetching some data! : ${error}`);
    return res.status(400).send({ items: { activeIPs: ['error fetching ips. Sorry  :(   '] } });
  });
};

/* istanbul ignore next */
const doesExist = (isTest) => {
  if (!isTest || typeof isTest === 'undefined') {
    return false;
  }
  return true;
};

export default function (app) {
  app.post('/addRemoveIP', (req, res) => {
    const isAddIp = req.body.isAddIp;
    /* istanbul ignore next */
    return doesExist(req.body.isTest) ? sendDataForAddRemoveIpMock(isAddIp, res) : sendAddIpDataToClient(isAddIp, res);
  });
}
