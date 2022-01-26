import React from 'react';
import styles from './button.module.css';
import { Btn } from '../Intro/intro';

const Button = ({ text, click }: Btn ) => {
    return (
        <button className={styles.button_design} onClick={click}>{text}</button>
    );
};

export default Button;