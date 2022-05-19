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


function App() {
  let [best,setBest] = useState();

  function bestData(){
    fetch(`https://dhgh9590.github.io/forck_json/main/best1.json`)
      .then(res => res.json())
      .then(data => {
        setBest(data);
      })
  }

  function bestData2(){
    fetch(`https://dhgh9590.github.io/forck_json/main/best2.json`)
      .then(res => res.json())
      .then(data => {
          let newBest = [...best,...data];
          setBest(newBest);
      })
  }

  useEffect(()=>{
    bestData();
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
        <Route path="/" element={<Main best={best} bestData2={bestData2} setBest={setBest}></Main>}></Route>
        <Route path="/Costume" element={<Costume></Costume>}></Route>
        <Route path="/Shoes" element={<div>Shoes</div>}></Route>
        <Route path="/Accessories" element={<div>Accessories</div>}></Route>
        <Route path="/Perfume" element={<div>Perfume</div>}></Route>
        <Route path="/Cart" element={emailCheck == true ? <Cart></Cart> : <Login onLogin={onLogin}></Login>}></Route>
        <Route path="/Detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
