import React, { useState } from 'react';
import Content from '../../Login/Content/content';
import Button from '../Button/button';
import styles from './sandbox.module.css';

type BoxElements = {
    checkImage: boolean;
    checkSubmit: boolean;
};

const Sandbox = ({ checkImage, checkSubmit }: BoxElements) => {
    const [isImg, setIsImg] = useState<Boolean>(checkImage);
    
    return (
        <div className={styles.container}>
            {
                (isImg) ? <img src="./img/background-2.png" alt="" /> 
                : <div className={styles.container__box}>
                    <Content />
                    {
                        (checkSubmit) && <Button text="등록" click={() => console.log('clicked!')} />
                    }
                </div>
            }
        </div>
    );
};

export default Sandbox;