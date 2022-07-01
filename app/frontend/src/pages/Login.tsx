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
              data-testid="password_input"
              placeholder="Senha"
            />
          </label>
        
          <button
            data-testid="login__login_btn"
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
