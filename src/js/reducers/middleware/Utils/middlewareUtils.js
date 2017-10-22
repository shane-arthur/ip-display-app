import { sendData } from '../../../data/dataFetcher';
import { apiMappings } from '../../../constants/other-constants/ApiMappings';

const determineItemDifference = (apiResponse, stateResponse, socket) => {
  const differences = new Set(
    [...apiResponse].filter(x => !stateResponse.includes(x)));
  for (const item of differences) { // eslint-disable-line no-restricted-syntax
    if (item) {
      stateResponse.push(item);
    }
  }
  socket.emit('IpAdded', stateResponse);
};

export function removeIpAddress(socket) {
  let dataToEmit = null;
  sendData(apiMappings.ADD_REMOVE_IP, { isAddIp: false }).then((response) => {
    dataToEmit = response;
    return response;
  }).catch(error =>
    error,
  ).finally(() => {
    socket.emit('IpRemoved', dataToEmit);
  });
}


export function addIpAddress(socket, state) {
  let dataToEmit = null;
  sendData(apiMappings.ADD_REMOVE_IP, { isAddIp: true }).then((response) => {
    dataToEmit = response;
    return response;
  }).catch(error =>
    error,
  ).finally(() => {
    determineItemDifference(Array.from(new Set(dataToEmit.items.activeIps)), state, socket);
  });
}
