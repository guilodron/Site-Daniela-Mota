import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/assets/logoDaniela.svg" alt="logo"></img>
        </a>
      </Link>

      <ul className={styles.nav}>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#media">Mídias</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
        
    </header>
  );
}

export default Header;