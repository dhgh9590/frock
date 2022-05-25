import './reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';
import { Routes,Route,Link,useNavigate,Outlet } from 'react-router-dom';
import Nav from './components/nav/nav';
import { useEffect, useState } from 'react';
import Cart from './router/cart/cart';
import AuthService from './service/auth_service';
import Login from './components/login/login';
import Main from './router/main/main';
import Costume from './router/costume/costume';
import Detail from './router/detail/detail';
import { useDispatch } from 'react-redux';
import { addLatestData } from './store';
import Footer from './components/footer/footer';
import Shoes from './router/shoes/shoes';
import Accessories from './router/accessories/accessories';
import Perfume from './router/perfume/perfume';


function App() {
  let [best,setBest] = useState([]);//best상품 ajax요청한 값 담는 state
  let [visible,setVisible] = useState(0);//best상품 버튼 삭제 state
  let [loading,setLoading] = useState(false) //로딩중 표시
  let dispatch = useDispatch();
  

  //best 상품 ajax요청
  function bestData(url){
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(()=>{
          let newBest = [...best,...data];
          setLoading(false);
          setBest(newBest);
        },500)
      })
  }

  //latest 상품 ajax요청
  function latestData(){
    fetch(`https://dhgh9590.github.io/forck_json/main/latest.json`)
      .then(res => res.json())
      .then(data => {
        dispatch(addLatestData(data))
      })
  }

  useEffect(()=>{
    loginCheck();
    bestData(`https://dhgh9590.github.io/forck_json/main/best1.json`);
    latestData();
    if(!localStorage.getItem("shoppingBag")){
      localStorage.setItem("shoppingBag",JSON.stringify([]));
    }
    localStorage.setItem("pageNum",0);
  },[])




  /* 로그인 기능 */
  const authService = new AuthService();

  function onLogin(){
      authService.login()
        .then((data)=>{loginData(data.user)})
  };

  /* 로그인 체크 */
  let [emailCheck,setEmailCheck] = useState(false);

  function loginData(user){
    //console.log(user);
    localStorage.setItem("emailCheck",user.emailVerified);
    loginCheck();
  };

  /* 로컬스토리지 체크 */
  function loginCheck(){
    let getLocalEmail = localStorage.getItem("emailCheck");

    //로컬 스토리지에 emailCheck 있다면 setEmailCheck을 true / 없다면 false
    if(getLocalEmail){
      setEmailCheck(true)
    }else{
      setEmailCheck(false)
    }
  }

  return (
    <div className="App">
      <Nav loginData={loginData} emailCheck={emailCheck} setEmailCheck={setEmailCheck} onLogin={onLogin}></Nav>
      <Routes>
        <Route path="/" element={<Main best={best} bestData={bestData} setBest={setBest} visible={visible} setVisible={setVisible} loading={loading} setLoading={setLoading}></Main>}></Route>
        <Route path="/Costume" element={<Costume></Costume>}></Route>
        <Route path="/Shoes" element={<Shoes></Shoes>}></Route>
        <Route path="/Accessories" element={<Accessories></Accessories>}></Route>
        <Route path="/Perfume" element={<Perfume></Perfume>}></Route>
        <Route path="/Cart" element={emailCheck == true ? <Cart></Cart> : <Login onLogin={onLogin}></Login>}></Route>
        <Route path="/Detail/:id" element={<Detail best={best} onLogin={onLogin} emailCheck={emailCheck}></Detail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
