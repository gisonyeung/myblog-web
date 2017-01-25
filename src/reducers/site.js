import { Site, Status } from "../constants";
import { combineReducers } from "redux";
import _ from 'lodash';
import getStatus from '../utils/getStatus';

const summation_state_initial = {
  numbers: {
    blog: 0,
    comment: 0,
    subscribe: 0,
  },
  hasInit: false,
}

const summation = (state = summation_state_initial, action) => {
  switch(action.type) {
    case Site.RECEIVE_FETCH_SUMMATION:
      return Object.assign({}, state, { 
        numbers: action.payload,
        hasInit: true,
      });
    default:
      return state;
  }
}


const subscribeModal_state_initial = {
  isOpen: false,
  fetchStatus: getStatus(),
}

const subscribeModal = (state = subscribeModal_state_initial, action) => {
  switch(action.type) {
    case Site.OPEN_SUBSCRIBE:
      return Object.assign({}, subscribeModal_state_initial, { isOpen: true });
    case Site.CLOSE_SUBSCRIBE:
      return Object.assign({}, state, { isOpen: false });
    case Site.REQUEST_SUBSCRIBE:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Site.RECEIVE_SUBSCRIBE:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.DONE, action.payload) });
    case Site.FAILED_SUBSCRIBE:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FAILED, action.payload) })
    default: 
      return state;
  }
}

export default combineReducers({
	summation,
  subscribeModal,
});