import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping ,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";




const Nav = (props) => {



    /* 로그아웃 기능 */
    function logout(){
        localStorage.removeItem("emailCheck");
        props.setEmailCheck(false);
    }
    

    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <div className={styles.logo}>
                            <Link to="/">
                                <h1>frock.</h1>
                            </Link>
                        </div>
                        <ul>
                            <li><Link to="/Costume"><em>Costume</em></Link></li>
                            <li><Link to="/Shoes"><em>Shoes</em></Link></li>
                            <li><Link to="/Accessories"><em>Accessories</em></Link></li>
                            <li><Link to="/Perfume"><em>Perfume</em></Link></li>
                        </ul>
                    </div>
                    <div className={styles.login}>
                        <ul>
                            <li><Link to="/Search"><em>SEARCH<FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search_icon}/></em></Link></li>
                            {
                                props.emailCheck == false ?
                                <li className={styles.login_btt} onClick={props.onLogin}><em>LOGIN</em></li>
                                : <li className={styles.login_btt} onClick={logout}><em>LOGOUT</em></li>
                            }
                            
                            <li><Link to="/Cart"><em><FontAwesomeIcon icon={faBagShopping} className={styles.cart_icon} /></em></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;