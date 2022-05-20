import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './detail.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";

const Detail = (props) => {
    let {id} = useParams();
    let navigate = useNavigate();
    let state = useSelector((state)=>{return state})
    let [itemData,setItemDate] = useState();
    let data = localStorage.getItem("itemData");
    data = JSON.parse(data);

    /* 사이즈 변경 */
    let [size,setSize] = useState(0);
    let [sizeText,setSizeText] = useState();
    function sizeChange(e){
        setSizeText(e.currentTarget.textContent)
    }

    /* 컬러 변경 */
    let [color,setColor] = useState(0);
    let [colorText,setColorText] = useState();
    function colorChange(e){
        setColorText(e.currentTarget.textContent)
    }

    function addLocalStorage(){
        let getItem = localStorage.getItem("shoppingBag");
        getItem = JSON.parse(getItem);
        getItem.push({id:data.id,title:data.title,filter:data.filter,price:data.price,size:sizeText,color:colorText});
        const newArray = getItem.reduce(function(acc, current) {
            if (acc.findIndex(({ id }) => id === current.id) === -1) {
              acc.push(current);
            }
            return acc;
          }, []);
        getItem = newArray;
        localStorage.setItem("shoppingBag",JSON.stringify(getItem));
    }

    useEffect(()=>{

        if(data.size && data.color){
            setSizeText(data.size[0])
            setColorText(data.color[0])
        };
        window.scrollTo({ top: 0});
    },[])

    return (
        <div>
            <section className={styles.section1}>
                <div className={styles.img_box}>
                    <img src={data.url} alt="" />
                </div>
                <div className={styles.text_box}>
                    <div className={styles.text}>
                        <em>{data.filter}</em>
                        <h2>{data.title}</h2>
                        {
                            data.size ? 
                            <div className={`${styles.size} ${size == 1 ? styles.visible : null}`}>
                                <div className={styles.content} onClick={()=>{size == 0 ? setSize(1) : setSize(0)}}>
                                    <p>size</p>
                                    <p>{sizeText}<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/></p>
                                </div>
                                <ul>
                                    {
                                        data.size && data.size.map(function(item,index){
                                            return(
                                                <li key={index} onClick={(e)=>{sizeChange(e);setSize(0)}}><em>{data.size[index]}</em></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            : null
                        }
                        {
                            data.color ?
                            <div className={`${styles.color} ${color == 1 ? styles.visible : null}`}>
                                <div className={styles.content} onClick={()=>{color == 0 ? setColor(1) : setColor(0)}}>
                                    <p>color</p>
                                    <p>{colorText}<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/></p>
                                </div>
                                <ul>
                                    {
                                        data.color && data.color.map(function(item,index){
                                            return(
                                                <li key={index} onClick={(e)=>{colorChange(e);setColor(0)}}><em>{data.color[index]}</em></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            : null
                        }
                        <strong>${data.price}</strong>
                        <div className={styles.btt}>
                            <button className={styles.btt_bag} onClick={(e)=>{e.preventDefault(); props.emailCheck == false ? props.onLogin() : addLocalStorage();}}>쇼핑백에 추가</button>
                            <form action="http://dhgh9590.dothome.co.kr/test/form.php" method='post'>
                                <input className='ir_su' type="text" name="filter" defaultValue={data.filter}/>
                                <input className='ir_su' type="text" name="title" defaultValue={data.title} />
                                <input className='ir_su' type="text" name="sizeText" defaultValue={sizeText} />
                                <input className='ir_su' type="text" name="colorText" defaultValue={colorText} />
                                <input className='ir_su' type="text" name="price" defaultValue={data.price} />
                                <button className={styles.btt_purchase}>구매하기</button>
                            </form>
                        </div>
                        <p>본 제품은 예약구매로 진행되며, 배송 기간이 약 2주에서 최대 
                        3달까지 소요될 수 있습니다. 제품 예약 기능 수명 주기가 만료
                        되면 주문이 취소됩니다. 세부 안내를 참조 바랍니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Detail;