import React, { useEffect, useState } from 'react';
import styles from './cart.module.css';

const Cart = () => {
    let getItem = localStorage.getItem("shoppingBag");
    let [data,setData] = useState(JSON.parse(getItem));
    let [allPrice,setAllPrice] = useState();

    function onRemove(targetId){
        let newData = data.filter((item)=>{ return item.id !== targetId});
        localStorage.setItem("shoppingBag",JSON.stringify(newData));
        setData(newData);
    }

    /* price계산기 */
    function calculator(){
        let price = data.map((item,index)=>{
            return item.price
        });
        let newPrice = price.reduce((a,b) => (a+b));
        setAllPrice(Math.floor(newPrice))
    }

    useEffect(()=>{
        if(data.length != 0){
            calculator()
        }else{
            setAllPrice(0)
        }
    },[data])


    return (
        <div>
            <section className={styles.section1}>
                {
                    data && data.map(function(item,index){
                        return(
                            <ul key={item.id}>
                                <li><em>{item.id}</em></li>
                                <li><em>{item.filter}</em></li>
                                <li><em>{item.title}</em></li>
                                <li><em>{item.price}</em></li>
                                <li><button onClick={()=>{onRemove(item.id)}}>삭제</button></li>
                            </ul>
                        )
                    })
                }
                <form action="http://dhgh9590.dothome.co.kr/test/form.php" method='post'>
                    <input className='ir_su' type="text" name="all" defaultValue={JSON.stringify(data)}/>
                    <button className={styles.btt_purchase}>전체 구매하기</button>
                </form>
                <em>전체금액 {allPrice}</em>
            </section>
        </div>
    );
};

export default Cart;