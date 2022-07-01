import React from 'react';
import {BrowserRouter, Switch }

export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <>
      <BrowserRouter>
          <Switch>

          </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
