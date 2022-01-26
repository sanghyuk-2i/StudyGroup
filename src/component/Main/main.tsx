import React, { Fragment } from 'react';
import Intro from '../Common/Intro/intro';
import Navigation from '../Common/Navigation/navigation';
import styles from './main.module.css';

export type Navi = {
    naviData: string[];
};

export type Introduct = {
    introData: string[];
};

const Main = () => {
    const naviData: Navi['naviData'] = ['홈', '그룹 찾기', '그룹 등록', '로그인'];
    const introData: Introduct['introData'] = [`혼자서 공부하지 말고, \n함께 공부해요!`, '강의 시간에 말을 걸지 못한 순간을 여기서 자유롭게 해결하세요.'];

    return (
        <Fragment>
            <Navigation naviData={naviData} />
            <div className={styles.container}>
                <Intro introData={introData} />
                
            </div>
        </Fragment>
    );
};

export default Main;