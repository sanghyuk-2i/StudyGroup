import React, { useState } from 'react';
import Main from './component/Main/main';
import { BrowserRouter } from 'react-router-dom';
import TRoute from './component/Common/TRoute/troute';

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Main />
      <TRoute />
    </BrowserRouter>
  );
};

export default App;