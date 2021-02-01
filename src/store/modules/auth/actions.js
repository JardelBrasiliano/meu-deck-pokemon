export const types = {
  LOGIN: {
    REQUEST: '@auth/SIGN_IN_REQUEST',
    SUCCESS: '@auth/SIGN_IN_SUCCESS',
    FAILURE: '@auth/SIGN_IN_FAILURE',
  },
  LOGOUT: {
    SUCCESS: '@auth/LOG_OUT',
  },
  REGISTER: {
    REQUEST: '@auth/REGISTER_REQUEST',
    SUCCESS: '@auth/REGISTER_SUCCESS',
    FAILURE: '@auth/REGISTER_FAILURE',
  },
};

export function logOut() {
  return {
    type: types.LOGOUT.SUCCESS,
  };
}

export function signInRequest(email, password) {
  return {
    type: types.LOGIN.REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: types.LOGIN.SUCCESS,
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: types.LOGIN.FAILURE,
  };
}

export function registerRequest(name, email, password) {
  return {
    type: types.REGISTER.REQUEST,
    payload: { name, email, password },
  };
}

export function registerSuccess() {
  return {
    type: types.REGISTER.SUCCESS,
  };
}

export function registerFailure() {
  return {
    type: types.REGISTER.FAILURE,
  };
}
