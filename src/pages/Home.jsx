import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";


const Home = ({ isAnimation, setIsAnimation }) => {  
  const navigate = useNavigate();

  const startAniHandler = () => setIsAnimation(true);

  useEffect(() => {
    if(isAnimation) {
      document.querySelector('body').classList.add('ani');
      const timer = setTimeout(() => {
        navigate('/dex');
      }, 1000); // 2초 
      return () => {
        clearTimeout(timer);
        document.querySelector('body').classList.remove('ani');
      }
    }        
  }, [isAnimation, navigate]);
  
  return (
    <HomeWrap className="homeWrap">
      <div className="line"/>
      <button 
        id="btnStart" 
        className={isAnimation ? 'curr' : ''}
        onClick={startAniHandler}
      >
        <p>도감 등록</p>
      </button>
    </HomeWrap>
  )
}

const HomeWrap = styled.div`
  position: fixed;
  top:0;
  left:0;
  z-index: 9999;
  width:100vw;
  height:100vh; 
  border-radius: 100%;
  &:before, &:after {
    content:'';
    position:absolute;
    left:0;
    width:100vw;
    height:50vh;
  } 
  &:before {
    top:0;
    background:#f5483d
  }
  &:after{
    bottom:0;
    background:#d0d9de
  }
  .line {
    position:absolute;
    top:50%;
    left:0;
    width:100%;
    height:20px;
    background:#000;
    transform:translateY(-50%);
  }
  button {
    position:absolute;
    top:50%;
    left:50%;
    z-index:2;
    width:300px;
    height:300px;
    font-size:36px;
    border-radius:100%;
    background:#f2f2f2;
    border:10px solid #000;
    cursor: pointer;
    transform: translate(-50%,-50%);    
    p {
      position: relative;
      z-index: 1;
    }
    &:before {
      content:'';
      position:absolute;
      top:50%;
      left:50%;
      width:200px;
      height:200px;
      border:10px solid #000;
      border-radius: 100%;
      transform: translate(-50%,-50%);
      transition:all .35s ease;
    }
    &:hover {
      &:before {
        background:#ecf02e;        
      }
    }    
  }
`;


export default Home
