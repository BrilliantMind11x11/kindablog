import { createReducer } from 'redux-act';
import * as actions from './actions';

const user = createReducer({
  [actions.getUserData]: state => state,
}, { id: 0, name: 'test' });

export default user;
