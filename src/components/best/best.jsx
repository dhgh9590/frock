import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './best.module.css';


const Best = (props) => {

    let navigate = useNavigate();
    let [visible,setVisible] = useState(0);

    function nameFilter(){
        let newBest = [...props.best]
        newBest.sort(function(a,b){
            if(a.title < b.title){
                return -1;
            }
            if(a.title == b.title){
                return 0;
            }
            if(a.title > b.title){
                return 1;
            }
        });
        props.setBest(newBest);
    }

    function priceFilter(){
        let newBest = [...props.best];
        newBest.sort(function(a,b){
            return a.price - b.price;
        })
        props.setBest(newBest);
    }
    
    return (
        <div>
            <section className={styles.section2}>
                <div className={styles.title}>
                    <h2>BEST PRODUCT</h2>
                </div>
                <button onClick={nameFilter}>이름순 정렬</button>
                <button onClick={priceFilter}>가격순 정렬</button>
                <div className={styles.item_wrap}>
                    <ul>
                        {
                            props.best && props.best.map(function(item,index){
                                return(
                                    <li key={item.id} onClick={()=>{navigate(`/Detail/${props.best[index].id}`)}}>
                                        <div className={styles.item}>
                                            <div className={styles.item_img}>
                                                <img src={props.best[index].url} alt="" />
                                            </div>
                                            <em>{props.best[index].filter}</em>
                                            <h3>{props.best[index].title}</h3>
                                            <strong>$ {props.best[index].price}</strong>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.btt_wrap}>
                    <button className={`${styles.more_btt} ${visible == 1 ? styles.visible : null}`} onClick={()=>{props.bestData2();setVisible(1)}}>View more</button>
                </div>
            </section>
        </div>
    );
};

export default Best;