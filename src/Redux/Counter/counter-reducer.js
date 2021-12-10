import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './counter-action';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ key }) => key !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_,{ payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});