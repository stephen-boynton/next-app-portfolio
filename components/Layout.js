import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-content: center;
  background-color: #141519;
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  padding: 10px;
`;

const SiteTitle = styled.h1`
  color: #ecedf2;
  font-family: "Alfa Slab One", cursive;
  padding: 0;
  margin: 0;
`;

const NavButton = styled.a`
  font-family: "Roboto", sans-serif;
  font-style: none;
  color: #ecedf2;
  padding: 10px;
  margin: 10px;

  :hover {
    cursor: pointer;
    border-bottom: 2px double #ecedf2;
  }
`;

export default ({ children, title }) => (
  <Main>
    <Head>
      <title>SCB Portfolio</title>
    </Head>
    <Header>
      <SiteTitle>SCB</SiteTitle>
      <Nav>
        <div>
          <Link href="/">
            <NavButton>HOME</NavButton>
          </Link>
          <Link href="/blog">
            <NavButton>BLOG</NavButton>
          </Link>
          <Link href="/about">
            <NavButton>ABOUT</NavButton>
          </Link>
          <Link href="/hireme">
            <NavButton>HIRE ME</NavButton>
          </Link>
        </div>
      </Nav>
    </Header>
    {children}
    <footer></footer>
  </Main>
);
