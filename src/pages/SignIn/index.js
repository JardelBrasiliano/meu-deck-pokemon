import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import {
  signInRequest,
  registerRequest,
} from '../../store/modules/auth/actions';

import './styles.css';

export default function SignIn() {
  const { loadingSignInRequest, isSignedIn } = useSelector(
    (state) => state.auth,
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const dispatch = useDispatch();

  function Buttons() {
    return (
      <>
        {isSignedIn > 0 ? <Redirect to="/" /> : null}
        <button
          type="button"
          onClick={() =>
            !isRegister
              ? dispatch(signInRequest(email, password))
              : setIsRegister(false)
          }
        >
          Entrar
        </button>
        <div className="sign-in-register">
          <button
            type="button"
            onClick={() =>
              isRegister
                ? dispatch(registerRequest(name, email, password))
                : setIsRegister(true)
            }
          >
            Cadastrar
          </button>
        </div>
      </>
    );
  }
  return (
    <div className="sign-in-page">
      <div className="sign-in-content">
        <img src={logo} alt="CL Logo" />
        {isRegister ? (
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(value) => {
              setName(value.target.value);
            }}
          />
        ) : (
          ''
        )}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(value) => {
            setEmail(value.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(value) => {
            setPassword(value.target.value);
          }}
        />
        {loadingSignInRequest ? <p>Carregando...</p> : <Buttons />}
        {/* <Link to="/cadastro">Cadastrar</Link> */}
      </div>
    </div>
  );
}
