import { useEffect } from "react";
import AOS from 'aos';

const { default: Head } = require("next/head")

const Layout = ({children}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, []);

  return (
    <>
      <Head>
        <title>Daniela Mota</title>
        <link rel="icon" href="assets/logoDaniela.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;1,100&display=swap" rel="stylesheet"></link>
      </Head>
      {children}
    </>
  );
}

export default Layout;