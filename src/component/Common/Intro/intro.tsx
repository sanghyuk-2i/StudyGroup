import React from 'react';
import Button from '../Button/button';
import styles from './intro.module.css';

export type Btn = {
    text: string;
    click: () => void;
};

type Introduct = {
    introData: string[];
};

const Intro = ({ introData }: Introduct) => {
    const handleClick = () => {console.log('clicked!')}
    return (
        <div className={styles.container}>
            <div className={styles.introText}>
                <h2>{introData[0].split(',')[0]}<br />{introData[0].split(',')[1]}</h2>
                <span>{introData[1]}</span>
            </div>
            <Button text="지금 등록" click={handleClick} />
        </div>
    );
};

export default Intro;