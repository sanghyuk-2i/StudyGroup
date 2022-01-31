import React from 'react';
import styles from './navigation.module.css';

type Navi = {
    naviData: string[];
};

const Navigation = ({ naviData }: Navi) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.logo__image}>
                    <img src="./img/react.png" alt="logo" />
                </div>
                <div className={styles.logo__text}>
                    <span>React</span>
                </div>
            </div>
            <div className={styles.list}>
                <ul>
                    {
                        naviData.map((item, idx) => <li key={`naviData_${idx}`}>{item}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navigation;