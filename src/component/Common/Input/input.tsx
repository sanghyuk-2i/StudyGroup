import React from 'react';
import styles from './input.module.css';

type InputData = {
    type: number;
    label: string;
    placeholder: string;
};

const Input = ({ type, label, placeholder }: InputData) => {
    return (
        <div className={styles.container}>
            <label htmlFor="ibox">{label}</label>
            <input className={styles.input} type="text" name='ibox' placeholder={placeholder} />
        </div>
    );
};

export default Input;