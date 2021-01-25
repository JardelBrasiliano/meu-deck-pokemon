import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

import './styles.css';

export default function SignIn() {
  // const { loadingSignInRequest, isSignedIn, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button
        type="button"
        onClick={() => dispatch(signInRequest({ email: '', password: '' }))}
      >
        Entrar
      </button>
    </div>
  );
}
