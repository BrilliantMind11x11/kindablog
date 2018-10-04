import { combineReducers } from 'redux';
import user, { actions, selectors } from './user';

export {
  selectors,
  actions,
};

export default combineReducers({
  user,
});
