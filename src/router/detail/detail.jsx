import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './detail.module.css';

const Detail = (props) => {

    let {id} = useParams();
    let state = useSelector((state)=>{return state})
    let data = state.detailData.data;

    return (
        <div>
            <section className={styles.section1}>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src={data.url} alt="" />
                    </div>
                    <em>{data.filter}</em>
                    <h3>{data.title}</h3>
                    <strong>$ {data.price}</strong>
                </div>
            </section>
        </div>
    );
};

export default Detail;