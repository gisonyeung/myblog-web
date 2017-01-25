import fetch from '../utils/fetch';
import { Site } from "../constants";
import Api from "../constants/Api";
import _ from "lodash";
import network from "./network";

// 获取站点数据
const fetchSiteNumbers = (dispatch) => {
  fetch.POST(Api.getSiteNum)
  .then(data => {
  	if ( data.result !== 'success' ) {
  	  console.log('请求站点数据失败: ', data.reason)
  	  return false;
  	}
  	dispatch({
  	  type: Site.RECEIVE_FETCH_SUMMATION,
  	  payload: {
        blog: data.numbers[0],
        comment: data.numbers[1],
        subscribe: data.numbers[2],
      },
  	});
  })
  .catch(err => {
  	console.log('请求站点数据失败: ', err)
  });
}

// 开关订阅框
const openSubscribeModal = {
  type: Site.OPEN_SUBSCRIBE
};
const closeSubscribeModal = {
  type: Site.CLOSE_SUBSCRIBE
}

const addSubscribe = (formData) => (dispatch) => {

  dispatch(network.requestAction(Site.REQUEST_SUBSCRIBE));
  fetch.POST(Api.addSubscribe, formData)
  .then(data => {
    if ( data.result !== 'success' ) {
      dispatch(network.failAction(Site.FAILED_SUBSCRIBE, data.reason));
      return false;
    }
    dispatch(network.receiveAction(Site.RECEIVE_SUBSCRIBE, data.reason));
  })
  .catch(err => {
    dispatch(network.failAction(Site.FAILED_SUBSCRIBE, err));
  });

}

export default {
  fetchSiteNumbers,
  openSubscribeModal,
  closeSubscribeModal,
  addSubscribe,
}