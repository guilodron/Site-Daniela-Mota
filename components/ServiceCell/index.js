import styles from './serviceCell.module.css'

const ServiceCell = ({icon: Icon, children}) =>{
  return (
    <div className={styles.cell}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <span className={styles.text}>{children}</span>
    </div>
  );
}

export default ServiceCell;