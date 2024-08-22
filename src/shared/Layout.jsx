import styled from "styled-components";
import logo from "@/assets/img/logo-pokemon.png";
import { Link } from "react-router-dom";

function Header(){
  return (
    <>
      <HeaderLayout id="header">
        <div className="inner">
          <h1 className="logo">
            <Link to="/">
              PoKeMoN
            </Link>
          </h1>
        </div>
      </HeaderLayout>
    </>
  );
}

function Footer(){
  return (
    <>
      <FooterLayout id="footer">
        <div className="inner">
          <p></p>
        </div>
      </FooterLayout>
    </>
  )
}



const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div id="wrap">
        <div id="container">
          <div id="contents">
            {children}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

const HeaderLayout = styled.header`
  .inner {
    display:flex;
    justify-content:center;
    .logo {
      display:inline-block;
      a {
        font-size:80px;
        font-weight:bold;
        text-decoration: none;
        color: #ffcc1c;
        text-shadow:-5px 0 #456bbc, 0 5px #456bbc, 5px 0 #456bbc, 0 -5px #456bbc;
        letter-spacing: 10px;
      }
    } 
  }  
`;

const FooterLayout = styled.footer`

`;

export default Layout
