import { combineReducers } from 'redux';

import authReducer from './authReducer';
import bookReducer from './bookReducer';
import notifications from './notificationReducer';
import actionTypes from '../actions/actionTypes';


const initialState = {
  authReducer: {},
  bookReducer: {
    books: [],
    pagination: {},
  }
};


const appReducer = combineReducers(
  { authReducer, bookReducer, notifications }
);

const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return appReducer(state, action);
  }
};


export default rootReducer;
