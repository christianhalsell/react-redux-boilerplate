import { SET_ALERT } from '../constants/index.js';

const initialState = {
  msg: 'world'
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        msg: payload
      };
    default:
      return state;
  }
}
