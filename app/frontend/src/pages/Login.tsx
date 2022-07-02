import React from 'react';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {
  return (
    <>
      <section className="user-login-area">
        <form>
          <h1>Login</h1>
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
