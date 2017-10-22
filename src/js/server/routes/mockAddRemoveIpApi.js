import { Promise } from 'bluebird';

export default function sendDataForAddRemoveIpMock(isAddIp, res) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const itemsCollection = [{ activeIps: ['222.422.525'] }];
    const ipAddress = '242.242.52';
    if (isAddIp) {
      itemsCollection[0].activeIps.push(ipAddress);
      return res.status(200).send({ items: { activeIps: itemsCollection[0].activeIps } });
    } else { // eslint-disable-line no-else-return
      const filteredItems = itemsCollection[0].activeIps.filter(item =>
        item !== ipAddress,
      );
      itemsCollection[0].activeIps = filteredItems;
      console.log(`api call !! : ${itemsCollection[0].activeIps}`);
      return res.status(200).send({ ipAddress, items: { activeIps: itemsCollection.activeIps } });
    }
    /* istanbul ignore next */
  }).catch((error) => {
    /* istanbul ignore next */
    console.log(`there was an error fetching some data! : ${error}`);
    /* istanbul ignore next */
    return res.status(400).send({ items: { activeIPs: ['error fetching ips. Sorry  :(   '] } });
  });
}
