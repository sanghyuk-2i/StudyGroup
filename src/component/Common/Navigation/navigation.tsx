import React from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';

type Navi = {
    naviData: string[];
    linkData: string[];
};

const Navigation = ({ naviData, linkData }: Navi) => {
    
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
                        naviData.map((item, idx) => <li key={`naviData_${idx}`}><Link className={styles.link} to={linkData[idx]}>{item}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navigation;