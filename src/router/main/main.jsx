import React, { useEffect, useRef, useState } from 'react';
import Slider from '../../components/slider/slider';
import styles from './main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import Best from '../../components/best/best';
import Latest from '../../components/latest/latest';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {


    let navigate = useNavigate()
    return (
        <div>
            <Slider></Slider>
            <section className={styles.section1}>
                <div className={`${styles.left_box} ${styles.box}`}>
                    <div className={styles.text_box}>
                        <h3>Accessories</h3>
                        <p>TIMELESS EVERYDAY OBJECTS</p>
                        <button onClick={()=>{navigate('/Accessories')}}>View more<FontAwesomeIcon className={styles.icon} icon={faLongArrowAltRight} /></button>
                    </div>
                    <div className={styles.img_box}>
                        <img src={`${process.env.PUBLIC_URL}/img/section1_1.png`} alt="" />
                    </div>
                </div>
                <div className={`${styles.right_box} ${styles.box}`}>
                    <div className={styles.img_box}>
                        <img src={`${process.env.PUBLIC_URL}/img/section1_2.png`} alt="" />
                    </div>
                    <div className={styles.text_box}>
                        <h3>Perfume</h3>
                        <p>TIMELESS EVERYDAY OBJECTS</p>
                        <button onClick={()=>{navigate('/Perfume')}}>View more<FontAwesomeIcon className={styles.icon} icon={faLongArrowAltRight} /></button>
                    </div>
                </div>
            </section>
            <Best best={props.best} bestData={props.bestData} setBest={props.setBest} visible={props.visible} setVisible={props.setVisible} loading={props.loading} setLoading={props.setLoading}></Best>
            <Latest></Latest>
        </div>
    );
};

export default Main;