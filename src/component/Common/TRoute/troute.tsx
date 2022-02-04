import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../Main/main';
import Find from '../../Group/Find/find';
import Apply from '../../Group/Apply/apply';
import Login from '../../Login/login';


const TRoute = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/find" element={<Find />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default TRoute;