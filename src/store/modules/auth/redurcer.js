
const INITIAL_STATE = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  token: null,
}

export default function auth( state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        toke: action.payload.token,
      };
    case '@auth/SIGN_IN_SAILURE':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}