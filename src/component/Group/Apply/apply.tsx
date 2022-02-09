import React, { Fragment } from 'react';
import Input from '../../Common/Input/input';
import Sandbox from '../../Common/Sandbox/sandbox';
import styles from './apply.module.css';

type ApplyData = {
    major: string[];
    subject: string[];
    member: number[];
    place: string;
    title: string;
    description: string;
    date: Date[];
    startT: Date[];
    endT: Date[];
};

type SendData = {
    major: string;
    subject: string;
    member: number;
    place: string;
    title: string;
    description: string;
    date: Date;
    startT: Date;
    endT: Date;
};

const Apply = () => {

    return (
        <div className={styles.c}>
            <h2 className={styles.title}>스터디그룹 등록</h2>
            <div className={styles.container}>
                <div className={styles.form}>
                    <div className={styles.form__up}>
                        <div className={styles.form__up_left}>
                            <div className={styles.form__container}>
                                <Input type={1} label='학과명 선택' placeholder='학과/학부' />
                                <Input type={1} label='강의명 선택' placeholder='강의' />
                            </div>
                            <div className={styles.form__container}>
                                <Input type={1} label='인원 선택' placeholder='2명' />
                                <Input type={1} label='장소 선택' placeholder='도서관' />
                            </div>
                            <Input type={2} label='제목' placeholder='같이 공부할 사람 구해요~' />
                        </div>
                        <div className={styles.form__up_right}>
                            <Input type={3} label='날짜' placeholder='2022/01/01' />
                            <Input type={4} label='시작 시간' placeholder='09:00' />
                            <Input type={4} label='종료 시간' placeholder='13:00' />
                        </div>
                    </div>
                    <div className={styles.form__down}>
                        <label htmlFor="description">목표/계획</label>
                        <textarea name="description" id="descrip" cols={30} rows={10}></textarea>
                    </div>
                </div>
                <div className={styles.sandbox}>
                    <Sandbox checkImage={false} checkSubmit={true}/>
                </div>
            </div>
        </div>
    );
};

export default Apply;