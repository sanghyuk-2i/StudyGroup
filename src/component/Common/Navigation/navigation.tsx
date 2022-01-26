import React from 'react';
import { Navi } from '../../Main/main';
import styles from './navigation.module.css';

const Navigation = ({ naviData }: Navi) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.logo__image}>
                    <img src="./img/react.png" alt="logo" />
                </div>
                <div className={styles.logo__text}></div>
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