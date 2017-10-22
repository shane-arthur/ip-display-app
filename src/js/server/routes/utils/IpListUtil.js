import { Promise } from 'bluebird';

export default function getIp() {
  return new Promise((resolve, reject) => {
    const IP = require('external-ip')(); // eslint-disable-line global-require
    const getIP = Promise.promisify(IP);
    getIP().then((ip) => {
      resolve(ip);
    }).catch((error) => {
      console.log(`error getting ip address. Error Message : ${error}`);
      reject(null);
    });
  });
}
