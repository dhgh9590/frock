import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping ,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';




const Nav = (props) => {


    let menu = useRef(null)
    let hamburger = useRef(null)

    let [menuIndex,setMenuIndex] = useState();

    /* 햄버거 메뉴 */
    function click(e){
        e.classList.toggle(`${styles.active}`);
        menu.current.classList.toggle(`${styles.active}`)
    }

    function hamburgerClose(){
        hamburger.current.classList.remove(`${styles.active}`)
        menu.current.classList.remove(`${styles.active}`)
    }

    /* 로그아웃 기능 */
    function logout(){
        localStorage.removeItem("emailCheck");
        props.setEmailCheck(false);
    }




    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.menu} ref={menu}>
                        <div className={styles.logo}>
                            <Link to="/" onClick={()=>{setMenuIndex(null)}}>
                                <h1>frock.</h1>
                            </Link>
                        </div>
                        <ul>
                            <li onClick={()=>{setMenuIndex(0); hamburgerClose();}} className={menuIndex == 0 ? `${styles.active}` : null}><Link to="/"><em>Home</em></Link></li>
                            <li onClick={()=>{setMenuIndex(1); hamburgerClose();localStorage.setItem("pageNum",0);}} className={menuIndex == 1 ? `${styles.active}` : null}><Link to="/Costume"><em>Costume</em></Link></li>
                            <li onClick={()=>{setMenuIndex(2); hamburgerClose();}} className={menuIndex == 2 ? `${styles.active}` : null}><Link to="/Shoes"><em>Shoes</em></Link></li>
                            <li onClick={()=>{setMenuIndex(3); hamburgerClose();}} className={menuIndex == 3 ? `${styles.active}` : null}><Link to="/Accessories"><em>Accessories</em></Link></li>
                            <li onClick={()=>{setMenuIndex(4); hamburgerClose();}} className={menuIndex == 4 ? `${styles.active}` : null}><Link to="/Perfume"><em>Perfume</em></Link></li>
                        </ul>
                    </div>
                    <div className={styles.login}>
                        <ul>
                            {
                                props.emailCheck == false ?
                                <li className={styles.login_btt} onClick={props.onLogin}><em>LOGIN</em></li>
                                : <li className={styles.login_btt} onClick={logout}><em>LOGOUT</em></li>
                            }
                            <li><Link to="/Cart"><em><FontAwesomeIcon icon={faBagShopping} className={styles.cart_icon} /></em></Link></li>
                            <li className={`${styles.hamburger} hamburger`} onClick={(e)=>{click(e.currentTarget)}} ref={hamburger}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;