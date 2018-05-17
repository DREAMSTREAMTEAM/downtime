import * as actionTypes from './actionTypes';

export const saveResult = (response) => {
  const google = window.gapi.auth2.getAuthInstance();
  localStorage.setItem('token', google.currentUser.Ab.Zi.id_token);
  localStorage.setItem('expiresAt', google.currentUser.Ab.Zi.expires_at);
  localStorage.setItem('user', google.currentUser.Ab.w3.U3);
  return {
    type: actionTypes.LOGIN,
    auth: response,
  };
};

export const login = response => dispatch => dispatch(saveResult(response));

export const logout = () => {
  const google = window.gapi.auth2.getAuthInstance();
  localStorage.removeItem('token', google.currentUser.Ab.Zi.id_token);
  localStorage.removeItem('expiresAt', google.currentUser.Ab.Zi.expires_at);
  localStorage.removeItem('user', google.currentUser.Ab.w3.U3);
  return {
    type: actionTypes.LOGIN,
    auth: '',
  };
};
