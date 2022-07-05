import React from 'react';
import LinkButton from '../components/LinkButton';
import { cube } from '../images/index';
import '../styles/Home.css'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    < div className="home-container">
    <div>
      <h1>Ebyrt</h1>
      <img className="logo" src={ cube } alt="logo cubo verde" />
      <h2>Bem-vindo ao aplicativo de organização de tarefas!</h2>
    </div>
    <LinkButton to={'/login'} page={'Login'} />
    </div>
  );
};

export default Home;
