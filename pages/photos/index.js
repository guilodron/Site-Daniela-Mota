import SimpleReactLightBox, { SRLWrapper } from 'simple-react-lightbox';
import Layout from '../../components/Layout';
import styles from './photos.module.css';


const Photos = () => {

  const customCaptions = [
    { id: 0, caption: 'Recebimento do certificado do Congresso Condominial de Goiás' },
    { id: 1, caption: 'Curso de capacitação' },
    { id: 2, caption: 'Palestra no II Congresso Condominial de Goiás' },
  ]

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.titleAndDescription}>
          <h1>Fotos e eventos</h1>
          <h2>Confira fotos de eventos, palestras e cursos.</h2>
          <h3>clique nas imagens para mais informações</h3>
        </div>
        <SimpleReactLightBox>
          <SRLWrapper customCaptions={customCaptions}>
            <div className={styles.gallery}>


              <img src="https://i.imgur.com/Kvl2uU3.jpg"></img>

              <img src="https://i.imgur.com/rgLVPUU.jpg"></img>
              <img src="https://i.imgur.com/woqKpKA.jpg"></img>

            </div>

          </SRLWrapper>
        </SimpleReactLightBox>
      </section>
    </Layout>
  );
}

export default Photos;