import React from 'react';
import {BrowserRouter, Routes }

export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <>
      <BrowserRouter>
          <Routes>

          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
