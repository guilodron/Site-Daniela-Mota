import styles from './services.module.css';
import ServiceCell from '../ServiceCell';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';

const Services = () => {

  return (
    <section id="services" className={styles.servicesContainer}>
      <div className={styles.services}>
        <h2>Serviços</h2>
        <div data-aos="fade-up" className={styles.serviceIcons}>
          <ServiceCell icon={ContactSupportOutlinedIcon}>
            Consultoria jurídica condominial  
          </ServiceCell>
          <ServiceCell icon={GavelRoundedIcon}>
            Cobrança Condominial e combate a inadimplência  
          </ServiceCell>
          <ServiceCell icon={FindInPageOutlinedIcon}>
            Elaboração e correção de Convenção e Regimento Interno  
          </ServiceCell>
          <ServiceCell icon={ShowChartOutlinedIcon}>
            Palestras de direito imobiliário e condominial  
          </ServiceCell>
          <ServiceCell icon={SchoolOutlinedIcon}>
            Cursos de capacitação em direito condominial e imobiliário  
          </ServiceCell>
          <ServiceCell icon={AssignmentIndOutlinedIcon}>
            LGPD (Lei Geral de Proteção de Dados) - Segurança de Dados para  condomínios
          </ServiceCell>
        </div>
      </div>
    </section>
  );
}

export default Services;