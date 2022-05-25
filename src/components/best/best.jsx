import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDetailData } from '../../store';
import Loading from '../loading/loading';
import styles from './best.module.css';


const Best = (props) => {

    let navigate = useNavigate();
    let [sort,setSort] = useState();
    let [price,setPrice] = useState(0);
    let dispatch = useDispatch();

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

    function lowPriceFilter(){
        let newBest = [...props.best];
        newBest.sort(function(a,b){
            return a.price - b.price;
        })
        props.setBest(newBest);
    }

    function highPriceFilter(){
        let newBest = [...props.best];
        newBest.sort(function(a,b){
            return b.price - a.price;
        })
        props.setBest(newBest);
    }
    
    
    return (
        <div>
            <section className={styles.section2}>
                <div className={styles.title}>
                    <h2>BEST PRODUCT</h2>
                </div>
                <div className={styles.sort}>
                    <button onClick={()=>{nameFilter();setSort(0);setPrice(0);}} className={sort == 0 ? `${styles.active}` : null}>Name Sort</button>
                    {
                        price == 0 ?
                        <button onClick={()=>{lowPriceFilter();setSort(1);setPrice(1);}} className={sort == 1 ? `${styles.active}` : null}>Low Price Sort</button>
                        :<button onClick={()=>{highPriceFilter();setSort(1);setPrice(0);}} className={sort == 1 ? `${styles.active}` : null}>High Price Sort</button>
                    }
                </div>
                <div className={styles.item_wrap}>
                    <ul>
                        {
                            props.best && props.best.map(function(item,index){
                                return(
                                    <li key={item.id} onClick={()=>{navigate(`/Detail/${index}`); dispatch(addDetailData(item))}}>
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
                {
                    props.loading ? <Loading></Loading> : null
                }
                {
                    props.visible == 0 ?
                    <div className={styles.btt_wrap}>
                        <button className={`${styles.more_btt} ${props.visible == 1 ? styles.visible : null}`} onClick={()=>{props.setLoading(true);props.bestData(`https://dhgh9590.github.io/forck_json/main/best2.json`);props.setVisible(1)}}>View more</button>
                    </div>
                    :null
                }

            </section>
        </div>
    );
};

export default Best;