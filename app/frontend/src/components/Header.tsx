import React from 'react';

interface IHeaderProps {
  page: string;
}

const Header: React.FC<IHeaderProps> = ({ page}: IHeaderProps) => {
  return (
    <header className="header">
      <div>
        <img src="../images/cubo.jpg" alt="cubo verde" />
      </div>
      <h1>{ page }</h1>
      <button
            type="button"
            onClick={ () => {} }
          >
            Sair
            <img src="../images/exit.png" alt="Sair do aplicativo"/>
          </button>
    </header>
  );
};

export default Header;
