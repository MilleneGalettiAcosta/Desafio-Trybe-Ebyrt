import React from 'react';
import Header from '../components/Header';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {
  return (
    <>
    <Header page={'Login'} />
      <section className="user-login-area">
        <form>
          <label htmlFor="email-input">
            <input
              className="email_input"
              type="email"
              value="email"
              onChange={ () => {}}
              placeholder="Email"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              value="senha"
              onChange={ () => {}}
              placeholder="Senha"
            />
          </label>
        
          <button
            type="submit"
            onClick={ () => {} }
          >
            Entrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
