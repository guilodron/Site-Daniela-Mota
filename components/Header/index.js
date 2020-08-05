import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="/assets/logoDaniela.svg" alt="logo"></img>
          </a>
        </Link>

        <ul className={styles.nav}>
          <li><Link href="/#about"><a>Sobre mim</a></Link></li>
          <li><Link href="/#services"><a>Serviços</a></Link></li>
          <li><Link href="/articles"><a>Artigos</a></Link></li>
          <li><Link href="/#contact"><a>Contato</a></Link></li>
        </ul>
      </div>
        
    </header>
  );
}

export default Header;