export function logOut() {
  return {
    type: '@auth/LOG_OUT',
  };
}

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function registerRequest(name, email, password) {
  return {
    type: '@auth/REGISTER_REQUEST',
    payload: { name, email, password },
  };
}

export function registerSuccess() {
  return {
    type: '@auth/REGISTER_SUCCESS',
  };
}

export function registerFailure() {
  return {
    type: '@auth/REGISTER_FAILURE',
  };
}
