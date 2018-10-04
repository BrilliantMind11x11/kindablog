import { createAction } from 'redux-act';

export const getUserData = createAction('GET_USER_DATA', () => ({ id: 1, name: 'Admin' }));
