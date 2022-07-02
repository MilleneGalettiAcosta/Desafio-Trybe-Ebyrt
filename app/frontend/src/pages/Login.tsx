import React, { ChangeEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import { REGEX_EMAIL, SIX } from '../helpers/constants';
import UseLocalStorage from '../hooks/UseLocalStorage';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {

  const [email, setEmail] = UseLocalStorage('email', '');
  const [password, setPassword] = UseLocalStorage('password', '');
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const validated = REGEX_EMAIL.test(email) && password.length > SIX;

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    if (event.target.name === "email") {
      setEmail(event.target.value)
    } else {
      setPassword(event.target.value);
    }
  }

  const login = async (event: any):Promise<void> => {
    event.preventDefault();
    setIsLogged(true);
  }

  if (isLogged) return <Navigate to="/task" />;

  return (
    <>
    <Header page={'Login'} />
      <section className="user-login-area">
        <form>
          <h2>Fazer login para prosseguir para a Lista de Tarefas</h2>
          <label htmlFor="email-input">
            <input
              className="email_input"
              type="email"
              name="email"
              value={ email }
              onChange={ handleChange }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              value={ password }
              onChange={ handleChange }
              placeholder="Senha"
            />
          </label>
        
          <button
            type="button"
            disabled={ !validated }
            onClick={ (event) => login(event) }
          >
            Entrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
