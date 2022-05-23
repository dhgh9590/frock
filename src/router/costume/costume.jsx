import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './costume.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDetailData } from '../../store';

const Costume = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let {id} = useParams()
    let [item,setItem] = useState();//데이터 값 저장
    let [pageVisible,setPageVisible] = useState(0); //이전,다음 버튼 숨김
    let [pageActive,setPageActive] = useState(0);
    let [page,setPage] = useState(1);//보여질 페이지 번호
    let [pageGroup,setPageGroup] = useState([1,2,3]); //페이지 버튼 갯수
    let pageLength = pageGroup.length;//이전,다음 클릭시 페이지 변경 숫자
    let [pageNum,setPageNum] = useState();
    let [sort,setSort] = useState();
    let [price,setPrice] = useState(0);

    function nameFilter(){
        let newBest = [...item]
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
        setItem(newBest);
    }

    function lowPriceFilter(){
        let newBest = [...item];
        newBest.sort(function(a,b){
            return a.price - b.price;
        })
        setItem(newBest);
    }

    function highPriceFilter(){
        let newBest = [...item];
        newBest.sort(function(a,b){
            return b.price - a.price;
        })
        setItem(newBest);
    }

    /* 데이터 받아오는 함수 */
    function data(index){
        fetch(`https://dhgh9590.github.io/forck_json/main/costume.json`)
          .then(res => res.json())
          .then(data => {
            setItem(data[index]);
          })
      }

    /* 페이지 버튼 다음 클릭시 페이지 버튼 숫자 변경 */
    function next(){
        setPage(page += 3)
    }

    /* 페이지 버튼 이전 클릭시 페이지 버튼 숫자 변경 */
    function previous(){
        if(page >= 3){
            setPage(page -= 3)
        }
    }

    function pageParams(index){
        localStorage.setItem("pageNum",index);
    };
    
    useEffect(()=>{
        data(localStorage.getItem("pageNum"));
    },[])
    
    

    return (
        <div>
            <section className={styles.section1}>
                <div className={styles.container}>
                    <div className={styles.item_wrap}>
                        <div className={styles.sort}>
                            <button onClick={()=>{nameFilter();setSort(0);setPrice(0);}} className={sort == 0 ? `${styles.active}` : null}>Name Sort</button>
                            {
                                price == 0 ?
                                <button onClick={()=>{lowPriceFilter();setSort(1);setPrice(1);}} className={sort == 1 ? `${styles.active}` : null}>Low Price Sort</button>
                                :<button onClick={()=>{highPriceFilter();setSort(1);setPrice(0);}} className={sort == 1 ? `${styles.active}` : null}>High Price Sort</button>
                            }
                        </div>
                        <ul>
                            {
                                item && item.map((item,index)=>{
                                    return(
                                        <li key={index} onClick={()=>{navigate(`/Detail/${item.id}`);dispatch(addDetailData(item))}}>
                                            <div className={styles.item}>
                                                <div className={styles.item_img}>
                                                    <img src={item.url} alt="" />
                                                </div>
                                                <em>{item.filter}</em>
                                                <h3>{item.title}</h3>
                                                <strong>$ {item.price}</strong>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.page_wrap}>
                        <ul>
                            <li onClick={()=>{previous();setPageVisible(0);pageParams(2); data(2)}} className={pageVisible == 0 ? styles.visible : null}><button><FontAwesomeIcon icon={faAngleLeft} /></button></li>
                            {
                                pageGroup && pageGroup.map((item,index)=>{
                                    return(
                                        <li key={index} className={(localStorage.getItem("pageNum")) == index ? styles.active : ((localStorage.getItem("pageNum")) == index + 3? styles.active : null)}>
                                            <button onClick={(e)=>{pageParams(e.currentTarget.textContent - 1); data(localStorage.getItem("pageNum")); window.scrollTo({ top: 0, behavior: 'smooth'});}}>{page + index}</button>
                                        </li>
                                    )
                                })
                            }
                            <li onClick={()=>{next();setPageVisible(1); pageParams(3); data(3); setPageActive(1)}} className={pageVisible == 1 ? styles.visible : null}><button><FontAwesomeIcon icon={faAngleRight} /></button></li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Costume;