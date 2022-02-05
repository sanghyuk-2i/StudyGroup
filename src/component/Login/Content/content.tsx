import React, { Fragment } from 'react';
import styles from './content.module.css';

const Content = () => {
    return (
        <Fragment>
            <div className={styles.login__main}>
                <form action="#" method="post">
                    <input type="text" placeholder='아이디' />
                    <input type="password" name="pwd" id="pwd" placeholder='비밀번호' />
                </form>
                <div className={styles.checkBox}>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">아이디 기억</label>
                </div>
                <button type="submit">로그인</button>
            </div>
            <button name='google-btn' className={styles.google__button}>
                <div className={styles.button__image}></div>
                <span>Login in Google</span>
            </button>
            <div className={styles.login__signup}>
                <span>혹시 회원이 아닌신가요?</span>
                <span><a href='/'>회원 가입</a></span>
            </div>
        </Fragment>
    );
};

export default Content;