import React from 'react';
import { useNavigate } from 'react-router-dom';
import { exit , cube } from '../images/index';
import '../styles/Header.css';

interface IHeaderProps {
  page: string;
}

const Header: React.FC<IHeaderProps> = ({ page}: IHeaderProps) => {

  const navigate = useNavigate();

  const logout = ():void => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={ cube } alt="cubo verde" />
        <h3>Ebyrt</h3>
      </div>
      <h1>{ page }</h1>
      <button
            className="btn"
            type="button"
            onClick={ () => logout() }
          >
            Sair
            <img src={ exit } alt="Sair do aplicativo"/>
          </button>
    </header>
  );
};

export default Header;
