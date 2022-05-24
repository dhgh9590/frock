import React, { useEffect, useRef, useState } from 'react';
import styles from './cart.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp , faAngleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDetailData } from '../../store';


const Cart = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let getItem = localStorage.getItem("shoppingBag");
    getItem = JSON.parse(getItem)
    let [data,setData] = useState(getItem.sort((a,b)=>{return a.id - b.id})); //데이터의 id순으로 정렬
    let [allPrice,setAllPrice] = useState(); //아이템 가격 저장
    let [itemCount,setItemCount] = useState(); //아이템 갯수 저장
    let [size,setSize] = useState(); //사이즈 ui 변경
    let [sizeChange,setSizeChange] = useState(); //사이즈 변경값 저장
    let [color,setColor] = useState();//컬러 ui 변경
    let [colorChange,setColorChange] = useState(); //컬러 변경값 저장
    let [imgOver,setImgOver] = useState();
    

    /* 아이템 삭제 함수 */
    function onRemove(targetId){
        let newData = data.filter((item)=>{ return item.id !== targetId});
        localStorage.setItem("shoppingBag",JSON.stringify(newData));
        setData(newData);
    }

    /* price계산기 */
    function calculator(){
        let price = data.map((item,index)=>{
            return item.price * item.count
        });
        let newPrice = price.reduce((a,b) => (a+b));
        setAllPrice(Math.floor(newPrice))
    }

    /* 상품 수량 증가 */
    function countPlus(item,targetId){
        setItemCount(item.count += 1);
        addCount(item,targetId);
    }
    /* 상품 수량 감소 */
    function countMinus(item,targetId){
        if(item.count > 1){
            setItemCount(item.count -= 1)
            addCount(item,targetId);
        }
    }

    /* 변경된 수량을 로컬스토리지에 저장 */
    function addCount(item,targetId){
        let newData = data.filter((item)=>{ return item.id !== targetId});
        getItem = newData;
        getItem.push(item)
        setData(getItem.sort((a,b)=>{return a.id - b.id}))
        localStorage.setItem("shoppingBag",JSON.stringify(data));
    }

    
    /* 사이즈 변경 */
    function changeSize(e,item,targetId){
        setSizeChange(item.sizeText = e);
        setTimeout(()=>{
            setSize();
        },0);
        addCount(item,targetId)
    }

    /* 컬러 변경 */
    function changeColor(e,item,targetId){
        setColorChange(item.colorText = e);
        setTimeout(()=>{
            setColor();
        },0);
        addCount(item,targetId)
    }

    useEffect(()=>{
        if(data.length != 0){
            calculator()
        }else{
            setAllPrice(0)
        }
    },[data,addCount])



    return (
        <div>
            <section className={styles.section1}>
                <div className={styles.container}>
                    <div className={styles.cart_list}>
                        <h2>Cart</h2>
                        <ul>
                            {
                                data && data.map(function(item,index){
                                    return(
                                        <li key={item.id}>
                                            <div className={styles.item}>
                                                <div className={`${styles.img_box} ${imgOver == item.id ? styles.active : null} `} onClick={()=>{navigate(`/Detail/${index}`); dispatch(addDetailData(item))}} onMouseEnter={()=>{setImgOver(item.id)}} onMouseLeave={()=>{setImgOver()}}>
                                                    <div className={styles.navi}>
                                                        <em>{item.title}</em>
                                                    </div>
                                                    <img src={item.url} alt="" />
                                                </div>
                                                <div className={styles.text_box}>
                                                    <div className={styles.filter}>
                                                        <em>{item.filter}</em>
                                                        <strong>${item.price}</strong>
                                                    </div>
                                                    <h4>{item.title}</h4>
                                                    <div className={styles.btt}>
                                                        <ul>
                                                            {
                                                                item.sizeText ? 
                                                                <li onClick={()=>{setSize(item.id)}} className={size == item.id ? `${styles.active}` : null}>
                                                                    <div className={styles.change}>
                                                                        <div className={styles.text}>
                                                                            <em>{item.sizeText}</em>
                                                                            <div className={styles.icon_box}>
                                                                                <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul>
                                                                        {
                                                                            item.size.map((el,index)=>{
                                                                                return(
                                                                                    <li key={index} onClick={(e)=>{changeSize(e.currentTarget.textContent,item,item.id);}}>{item.size[index]}</li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </li>
                                                                :null
                                                            }
                                                            {
                                                                item.colorText ?
                                                                <li onClick={()=>{setColor(item.id)}} className={color == item.id ? `${styles.active}` : null}>
                                                                    <div className={styles.change}>
                                                                        <div className={styles.text}>
                                                                            <em>{item.colorText}</em>
                                                                            <div className={styles.icon_box}>
                                                                                <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul>
                                                                        {
                                                                            item.color.map((el,index)=>{
                                                                                return(
                                                                                    <li key={index} onClick={(e)=>{changeColor(e.currentTarget.textContent,item,item.id);}}>{item.color[index]}</li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </li>
                                                                :null
                                                            }
                                                            <li>
                                                                <div className={styles.change}>
                                                                    <div className={styles.text}>
                                                                        <em>{item.count}</em>
                                                                        <div className={styles.icon_box}>
                                                                            <FontAwesomeIcon icon={faAngleUp} className={styles.icon} onClick={()=>{countPlus(item,item.id)}}/>
                                                                            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} onClick={()=>{countMinus(item,item.id)}}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <button onClick={()=>{onRemove(item.id)}} ><FontAwesomeIcon icon={faTrash} className={styles.icon}/>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.cart_all}>
                        <strong>List</strong>
                        <ul>
                            {
                                data.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <p>{item.title}</p>
                                            <p>+ ${item.price * item.count}<em>({item.count})</em></p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={styles.text}>
                            <em>Total</em>
                            <em>${allPrice}</em>
                        </div>
                        <form action="http://dhgh9590.dothome.co.kr/test/form.php" method='post'>
                            <input className='ir_su' type="text" name="all" defaultValue={JSON.stringify(data)}/>
                            <button className={styles.btt_purchase}>전체 구매하기</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;