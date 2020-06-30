export const CREAT_NEW_USER = 'CREAT_NEW_USER';
export const GET_LIST_USERS = 'GET_LIST_USERS';

export const creatNewUser = () => ({ type: CREAT_NEW_USER })
export const getListUsers = (list) => ({ type: GET_LIST_USERS, list })