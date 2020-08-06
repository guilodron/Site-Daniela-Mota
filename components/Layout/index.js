import { useEffect } from "react";
import AOS from 'aos';
import Header from '../Header';
import Footer from '../Footer';
import { FaWhatsapp } from "react-icons/fa";
import styles from './layout.module.css';

const { default: Head } = require("next/head")

const Layout = ({children}) => {

  useEffect(() => {
    AOS.init({
      duration: 800
    })
  }, []);

  return (
    <>
      <Head>
        <title>Daniela Mota</title>
        <link rel="icon" href="assets/logoDaniela.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;1,100&display=swap" rel="stylesheet"></link>
      </Head>
      <a target="_b" href="https://api.whatsapp.com/send?phone=5561983563737&text=Ol%C3%A1%20Dra.%20Daniela%2C%20"><FaWhatsapp className={styles.whatsapp} /></a>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;