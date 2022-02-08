import React from 'react';
import styles from './login.module.css';
import Intro from '../Common/Intro/intro';
import Sandbox from '../Common/Sandbox/sandbox';

type LoginData = {
    intro: string[];
    checkImage: boolean;
    checkSubmit: boolean;
};

const Login = () => {
    const initialData: LoginData = {
        intro: [`함께 고민해서, A+도 받고 친해져요!`, '강의 시간에 말을 걸지 못한 순간을 여기서 자유롭게 해결하세요.'],
        checkImage: false,
        checkSubmit: false,
    };

    return (
        <div className={styles.container}>
            <Intro introData={initialData['intro']} needButton={false} />
            <Sandbox checkImage={initialData['checkImage']} checkSubmit={initialData['checkSubmit']} />
        </div>
    );
};

export default Login;