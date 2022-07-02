import React from 'react';
import { exit , cube } from '../images/index';

interface IHeaderProps {
  page: string;
}

const Header: React.FC<IHeaderProps> = ({ page}: IHeaderProps) => {
  return (
    <header className="header">
      <div>
        <img src={ cube } alt="cubo verde" />
      </div>
      <h1>{ page }</h1>
      <button
            type="button"
            onClick={ () => {} }
          >
            Sair
            <img src={ exit } alt="Sair do aplicativo"/>
          </button>
    </header>
  );
};

export default Header;
