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


              <img src="https://lh3.googleusercontent.com/RTORD19_zNzqAKMZ446a7GtiuKVdK8xKdCt-mHk4E29Y-Yyo9sLh00aMHXhxyW3nQK5JTRwLZrzAa3iuiBcX1Qvp-j-vwc3Y2xz-9YnT3z4sxsA-ZI3FObIHGzpF_Ne6By8OOX525pOyZy9aqSW3UYdHRGXQ6MY78-lqJWGKhamJHNfTPLD89mhLPnTScgrw1sMARMczvMTH4Cy9QYNFldkh7T_AHx9wdNcCWLJkzBgrCET5rCokEBgDTIeYaeLTvJv5daUiDT2EwHxtgkkrttgi9NATkBFxr4hFfyEuuxZpIbFj-px8AJG27WAoyRu7oP21ZzuTvrZc-Bsvhc2di1GPZM6rPntQmBssgMfGMYn-ijmriSELsx9wokMN84WzuvlVZK-nv_qP7D4n3LhctCWqWB0_q7PoW8LpzPHVNBnMdWMdNp6vKW1vvSQbYsadamS5eWxOJsd9xO_P01Rebqjf4xOP_qlw8DsLxDUXsMpF4BG7OWV4YPf7XQaLqjkMA6fl07DZSyN0weq6OBP245afKFPry_ObShrLquWbbemU-DKNpJQUewViy7Upg8ADtE-PYHDCOPiHaKQEg7XT2ciyODlDo1JimsqE_Xo_6NqtZ8PwPnX08xK8DePLwBf3ivi2kU2pPeolEfPWI5tZUD2SwBxDnH4LAVp7K_Cnfj699WbuLy3_HUVDwpypZow=s379-no?authuser=2"></img>

              <img src="https://lh3.googleusercontent.com/hXtnMCbpBAgjbiYq3VYjoGuf8ts1jExYdECMELeTmMfJwDIIvDGOc073dEZ-SoKPWHCOb1lesSw6s9B98Jt_XGUvwYR0N_vFTYqeuiG-mkTY47C96HzLfU6FhBwmyM6-ZNTizaeDj48ZaJwOl3gMuRwsv2v7ZTQNiXbliqTTH-ZhQ5KOAYAESgZ9aTyhBMwtpiNp9I7KEP1E-ObSMjEAZPFoPbERDzC4rZMSZdhHVJ_wBfjn-uuYLUMaL_KsHjDA0FXTGt4FJ5vyNpMefuSjdBN2J-UOy7OJ97ve154iVyX8oH2TISqt4ZvoYnFmpB9xGEMFd12qZ2V8D4uMG4BLLRQd55Ke3qSO-RX9-dbLZsK22GGZ1N82AzHepk6aHzAg5SHRSbzLFKYqPyK-FDK6LfVjysGV8zD1bkQ3KNM3rerT3tkOSgdstrHWvGnPiqV8oboo3c2l6-1bYikAodZok6C4fRQmsaC_BCGGond-xgJKrTU92tU2OECYBBj2zoX7qXDmEMDY2DIIRyivFo9DOQxmdfNxACyd4q98JHADSCfDT5HZzYk2zUIi-iqUkDVLSaRDMLjFckmLS_MoUVlOMx8iaoZSlNf8VaEUavbA74DBYNCztKUFte1y5vTxg9srEcddpLAfTt21PeUdsvW2zfS9i6Ci94EDTyguDY_owyRR8a_0AIEYh76B4CZ-yCo=w848-h832-no?authuser=2"></img>
              <img src="https://lh3.googleusercontent.com/Dvq5V9_1swEhVgpg-VkZUkJb99HntEjkE7WY_cB4Ya3J9OoFAhBr8ur64buVPtp2CyqvSXXsh_ZamyNuMxgbszBJp-1Oasc8bMqhVhF7OkcgBUiyCbL05xxrk8_7iXEh854SMaakYO2c0kr64ubCo0YgFdutz-zVCpc6B4m3aniDBrk2scArxt50L1gjLzS7TM2niprw14Pb1Xj2_bxevTpZnWgDyw62IeX7KwL4pYM4eGPJ66-_VIbGU9W0GulJQm9KyIFiSjzU2ErEV-giqk471PuHcSjtIrojgOkSioy3k5Hjg3SzSmsvwohfzNcTgSYxn-S7Fcqm-YSd5f2bmUdZfI4bdg0qNv4SBOcGNPJVoZ6_OK9WmpMQUBx6xW2bLoqZ4ZR5-BqX2wxOuOZwzSouAc7E19F5-nrY-oOlTOJIBJVh-uUNvrsrpFIdyzcaG0aQ6vyeiDS38y-0KvM9ZcHoCnCRezqN8idTmiDgiKJxZ5zPRQte353pvBQ0Ct4PGaJbAc-KPjSOAzgxN3n6mbW9VgY3-gRHlXeIDKtp-Ov9nzhbiJyDmxMZS0xYWbIHKH5dllsrm8blUP5ozYk7dUjfxwjMORbhhDTkkN08SKmGI9ThprTQZyGWHaagCNPjuncrHjgPlGTZSr9AGtKbY6Kzy6CtPy9h5NyA1T6fbBHJmDbfHgWyyAG4YpxPhEw=w528-h832-no?authuser=2"></img>

            </div>

          </SRLWrapper>
        </SimpleReactLightBox>
      </section>
    </Layout>
  );
}

export default Photos;