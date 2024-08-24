import styled from "styled-components";
import logo from "@/assets/img/logo-pokemon.png";
import { Link } from "react-router-dom";

function Header(){
  return (
    <>
      <HeaderLayout id="header">
        <div className="inner">
          <h1 className="logo">
            <Link to="/dex">
              <img src={logo}/>
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
      img {
        width:400px
      }
    } 
  }  
`;

const FooterLayout = styled.footer`

`;

export default Layout
