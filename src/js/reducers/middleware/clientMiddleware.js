/* eslint import/no-named-as-default: 0,
arrow-parens:0, no-shadow : 0,
import/prefer-default-export : 0*/
import { REMOVE_IP_ADDRESS, ADD_IP_ADDRESS } from '../../constants/action-types/ActionTypes';
import { removeIpAddress, addIpAddress } from './utils/middlewareUtils';

export const thunk = store => {
  const dispatch = store.dispatch;
  const getState = store.getState;
  const state = getState();
  const filteredItems = [...new Set(state.items.activeIps)];
  const items = { activeIps: filteredItems };
  state.items = items;

  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    switch (action.type) {
      case REMOVE_IP_ADDRESS: {
        removeIpAddress(action.socket);
        break;
      }
      case ADD_IP_ADDRESS: {
        const { items } = state;
        const { activeIps } = items;
        addIpAddress(action.socket, activeIps);
        break;
      }
      default:
        break;
    }
    return next(action);
  };
};
