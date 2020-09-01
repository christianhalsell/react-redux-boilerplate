import { SET_ALERT } from '../constants';

export const setAlert = (msg) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: msg
  });
};
