import * as types from '../constants/action-types/ActionTypes';

export function removeIpAddress(socket) {
  return { type: types.REMOVE_IP_ADDRESS, socket };
}

export function removeIpAddressFromState(ipAddress) {
  return { type: types.REMOVE_IP_ADDRESS_FROM_STATE, ipAddress };
}

export function addIpAddress(socket) {
  return { type: types.ADD_IP_ADDRESS, socket };
}

export function addIpAddressToState(list) {
  return { type: types.ADD_IP_ADDRESS_TO_STATE, list };
}
