import React, { Fragment, useState } from 'react';
import Intro from '../Common/Intro/intro';
import Navigation from '../Common/Navigation/navigation';
import Sandbox from '../Common/Sandbox/sandbox';
import styles from './main.module.css';

type MainData = {
    navi: string[];
    intro: string[];
};

const Main = () => {
    const [data, setData] = useState<MainData | null>(null);
    const naviData: MainData['navi'] = ['홈', '그룹 찾기', '그룹 등록', '로그인'];
    const introData: MainData['intro'] = [`혼자서 공부하지 말고, 함께 공부해요!`, '강의 시간에 말을 걸지 못한 순간을 여기서 자유롭게 해결하세요.'];

    return (
        <Fragment>
            <Navigation naviData={naviData} />
            <div className={styles.container}>
                <Intro introData={introData} />
                <Sandbox checkImage={true} checkSubmit={false} />
            </div>
        </Fragment>
    );
};

export default Main;