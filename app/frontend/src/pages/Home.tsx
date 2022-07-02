import React from 'react';
import { cube } from '../images/index';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <>
    <div>
      <h1>Ebyrt</h1>
      <h2>Bem-vindo ao aplicativo de organização de tarefas!</h2>
      <img src={ cube } alt="logo cubo verde" />
    </div>
    <button type="button">Login / Registre-se</button>
    </>
  );
};

export default Home;
