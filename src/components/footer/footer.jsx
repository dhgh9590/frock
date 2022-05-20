import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.copy}>
                        <em>Copyright 2022. OH HO SEOL</em>
                    </div>
                    <div className={styles.sns}>
                        <ul>
                            <li><a href="#" target='blink'></a></li>
                            <li><a href="#" target='blink'></a></li>
                            <li><a href="#" target='blink'></a></li>
                            <li><a href="#" target='blink'></a></li>
                        </ul>
                    </div>
                    <div className={styles.telephone}>
                        <FontAwesomeIcon icon={faPhoneAlt} className={styles.tel_icon}/><em>800-1234-5678</em>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;