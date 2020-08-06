import styles from './footer.module.css';
import {GrLinkedin} from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Desenvolvido por </span>
      <a target="_blank" href="https://www.linkedin.com/in/guilherme-rodrigues-lodron-pires-14ab18189/">
        Guilherme Lodron
        <GrLinkedin />
      </a> 
    </footer>
  );
}

export default Footer;