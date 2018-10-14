import { createAction } from 'redux-act';
import types from './types';

const { GET_USER_DATA } = types;

export const getUserData = createAction(GET_USER_DATA, () => ({ id: 1, name: 'Admin' }));
