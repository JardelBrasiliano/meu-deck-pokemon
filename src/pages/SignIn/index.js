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
      <div className="sign-in-content">
        <img src={logo} alt="CL Logo" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button
          type="button"
          onClick={() => dispatch(signInRequest({ email: '', password: '' }))}
        >
          Entrar
        </button>
        <div className="sign-in-register">
          <p>Cadastrar</p>
          {/* <Link to="/cadastro">Cadastrar</Link> */}
        </div>
      </div>
    </div>
  );
}
