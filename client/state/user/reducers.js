import { createReducer } from 'redux-act';
import * as actions from './actions.js';

const user = createReducer({
  [actions.getUserData]: state => state,
}, { id: 0, name: 'test' });

export default user;
