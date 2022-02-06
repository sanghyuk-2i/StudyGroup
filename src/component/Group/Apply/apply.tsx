import React from 'react';
import Input from '../../Common/Input/input';
import Sandbox from '../../Common/Sandbox/sandbox';
import styles from './apply.module.css';

const Apply = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.form__up}>
                    <div className={styles.form__up_left}>
                        <div className={styles.form__container}>
                            <Input type={0} label='test' placeholder='example' />
                            <Input type={0} label='test' placeholder='example' />
                        </div>
                        <div className={styles.form__container}>
                            <Input type={0} label='test' placeholder='example' />
                            <Input type={0} label='test' placeholder='example' />
                        </div>
                        <Input type={0} label='test' placeholder='example' />
                    </div>
                    <div className={styles.form__up_right}>
                        <Input type={0} label='test' placeholder='example' />
                        <Input type={0} label='test' placeholder='example' />
                        <Input type={0} label='test' placeholder='example' />
                    </div>
                </div>
                <div className={styles.form__down}>
                    <label htmlFor="description">목표/계획</label>
                    <textarea name="description" id="descrip" cols={30} rows={10}></textarea>
                </div>
            </div>
            <div className={styles.sandbox}>
                <Sandbox checkImage={false} checkSubmit={false}/>
            </div>
        </div>
    );
};

export default Apply;