import React from 'react';
import { Introduct } from '../../Main/main';
import Button from '../Button/button';
import styles from './intro.module.css';

export type Btn = {
    text: string;
    click: () => void;
};

const Intro = ({ introData }: Introduct) => {
    const handleClick = () => {console.log('clicked!')}
    return (
        <div className={styles.container}>
            <div className={styles.introText}>
                <h2>{introData[0]}</h2>
                <span>{introData[1]}</span>
            </div>
            <Button text="지금 등록" click={handleClick} />
        </div>
    );
};

export default Intro;