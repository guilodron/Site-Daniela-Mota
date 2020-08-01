import styles from './about.module.css';
import {GrDocumentText, GrLinkedin} from 'react-icons/gr';
import Link from 'next/link';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.profile}>
        <img src="/assets/about 3.png" />
      </div>
      <div data-aos="fade-left" className={styles.aboutText}>
        <h2>
          Sobre mim
        </h2>
        <p>
        Advogada especialista em Direito Condominial e Imobiliário.<br/><br/>
        Consultora da Comissão Especial de Direito Condominial da OAB Federal.<br/><br/>
        Pós graduada em Direito Notarial e Registral.<br/><br/>
        Curso de extensão em Direito Imobiliário.<br/><br/>
        Palestrante.<br/><br/>
        Curso de formação para profissionais do ramo Condominial e Imobiliário. <br/><br/>
        Expertise na área de segurança de dados (LGPD) para condomínios, administradoras e demais ramos.<br/><br/>
        </p>
      </div>
    </section>
  );
}

export default About;