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
        Consultoria e treinamento para condomínios, prestadoras de serviços e empresas diante da LGPD (Lei Geral de Proteção de Dados).<br/><br/>
        Advogada especialista em Direito Condominial e Imobiliário.<br/><br/>
        Consultora da Comissão Especial de Direito Condominial da OAB Federal.<br/><br/>
        Pós graduada em Direito Notarial e Registral.<br/><br/>
        Curso de extensão em Direito Imobiliário.<br/><br/>
        Palestrante.<br/><br/>
        Cursos de aperfeiçoamento e atualização para interessados no ramo Condominial e Imobiliário. <br/><br/>
        </p>
      </div>
    </section>
  );
}

export default About;