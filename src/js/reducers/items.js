/* eslint camelcase : 0, no-use-before-define: 0*/
import { REMOVE_IP_ADDRESS_FROM_STATE, ADD_IP_ADDRESS_TO_STATE } from '../constants/action-types/ActionTypes';

export default function homepage(state = {}, action) {
  switch (action.type) {
    case REMOVE_IP_ADDRESS_FROM_STATE:
      return removeIpFromList(state, action.ipAddress);
    case ADD_IP_ADDRESS_TO_STATE:
      return addIpToList(state, action.list);
    default:
      return state;
  }
}

function removeIpFromList(state, itemToRemove) {
  const { activeIps } = state;
  const filteredIps = activeIps.filter(value =>
     value !== itemToRemove,
  );
  return { ...state, activeIps: filteredIps };
}

function addIpToList(state, activeIps) {
  return { ...state, activeIps };
}
