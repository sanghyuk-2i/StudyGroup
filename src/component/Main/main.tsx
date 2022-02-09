import React from 'react';
import styles from './main.module.css';
import Intro from '../Common/Intro/intro';
import Sandbox from '../Common/Sandbox/sandbox';

type MainData = {
    intro: string[];
    checkImage: boolean;
    checkSubmit: boolean;
};

const Main = () => {
    const initialData: MainData = {
        intro: [`혼자서 공부하지 말고, 함께 공부해요!`, '강의 시간에 말을 걸지 못한 순간을 여기서 자유롭게 해결하세요.'],
        checkImage: true,
        checkSubmit: false,
    };

    return (
        <div className={styles.container}>
            <Intro introData={initialData['intro']} needButton={true} />
            <Sandbox checkImage={initialData['checkImage']} checkSubmit={initialData['checkSubmit']} />
        </div>
    );
};

export default Main;