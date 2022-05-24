import React from 'react';
import styles from './login.module.css';

const Login = (props) => {
    return (
        <div>
            <section className={styles.section1}>
                <div className={styles.login_box}>
                    <div className={styles.wrap}>
                        <h2>LOGIN</h2>
                        <p>Enter your credentials to acces your account.</p>
                        <button className={styles.loginBtt} onClick={props.onLogin}><img src={`${process.env.PUBLIC_URL}/img/google_icon.png`} alt="" /><em>Log In with Google</em></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;