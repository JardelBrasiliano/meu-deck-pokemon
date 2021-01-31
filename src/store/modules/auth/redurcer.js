const INITIAL_STATE = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOG_OUT':
      return {
        ...state,
        isSignedIn: false,
        error: false,
        token: null,
        user: '',
      };
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true,
      };
    // REGISTROS
    case '@auth/REGISTER_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case '@auth/REGISTER_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
      };
    case '@auth/REGISTER_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
