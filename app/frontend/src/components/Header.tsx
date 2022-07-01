import React from 'react';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="header">
      <div>
        <img src="../images/cubo.jpg" alt="cubo verde" />
      </div>
      <h1>Lista de Tarefas</h1>
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
