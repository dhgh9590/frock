import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDetailData } from '../../store';
import styles from './latest.module.css';

const Latest = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let state = useSelector((state)=>{return state})
    let data = state.latestData.data;



    return (
        <div>
            <section className={styles.section3}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h2>LATEST PRODUCT</h2>
                    </div>
                    <div className={styles.item_wrap}>
                        {
                            data && data.map(function(item,index){
                                return (
                                    <div key={item[index].id} className={`${styles.item_box}`}>
                                        <h4>{data[index][index].filter}</h4>
                                        <ul>
                                            {
                                                data[index] && data[index].map(function(item,index){
                                                    return(
                                                        <li key={item.id} onClick={()=>{navigate(`/Detail/${index}`); dispatch(addDetailData(item));}}>
                                                            <div className={styles.item}>
                                                                <div className={styles.item_img}>
                                                                    <img src={item.url} alt="" />
                                                                </div>
                                                                <div className={styles.item_text}>
                                                                    <em>{item.filter}</em>
                                                                    <h6>{item.title}</h6>
                                                                    <strong>$ {item.price}</strong>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Latest;