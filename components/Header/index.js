import styles from './header.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="/assets/logoDaniela.svg" alt="logo"></img>
          </a>
        </Link>

        <ul onClick={() => setIsOpen(!isOpen)} className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <li><Link href="/#about"><a>Sobre mim</a></Link></li>
          <li><Link href="/#services"><a>Serviços</a></Link></li>
          <li><Link href="/articles"><a>Artigos</a></Link></li>
          <li><Link href="/#contact"><a>Contato</a></Link></li>
          <li><Link href="/#media"><a>Mídia</a></Link></li>
          <li><Link href="/photos"><a>Fotos/Eventos</a></Link></li>


        </ul>
      </div>
      
      <div className={styles.hamburguer} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
        
    </header>
  );
}

export default Header;