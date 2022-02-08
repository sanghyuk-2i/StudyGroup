import React from 'react';
import styles from './input.module.css';

type InputData = {
    type: number;
    label: string;
    placeholder: string;
};

const Input = ({ type, label, placeholder }: InputData) => {

    const checkType = (type: InputData['type']): string => {
        let styleStr = styles.input__common;
        switch (type) {
            case 1:
                styleStr = styles.input__select
                break;
            case 2:
                styleStr = styles.input__text
                break;
            case 3:
                styleStr = styles.input__date
                break;
            case 4:
                styleStr = styles.input__time
                break;
            default:
                break;
        }
        return styleStr;
    }

    return (
        <div className={styles.container}>
            <label htmlFor="ibox">{label}</label>
            <input className={[checkType(type), styles.input__common].join(' ')} type="text" name='ibox' placeholder={placeholder} />
        </div>
    );
};

export default Input;