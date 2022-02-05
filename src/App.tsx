import React, { useState } from 'react';
import Navigation from './component/Common/Navigation/navigation';
import { BrowserRouter } from 'react-router-dom';
import TRoute from './component/Common/TRoute/troute';

type AppData = {
  navi: string[];
  link: string[];
};

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const naviData: AppData['navi'] = ['홈', '그룹 찾기', '그룹 등록', '로그인'];
  const linkData: AppData['link'] = ['/', '/find', '/apply', '/login'];
  return (
    <BrowserRouter>
      <Navigation naviData={naviData} linkData={linkData} />
      <TRoute />
    </BrowserRouter>
  );
};

export default App;