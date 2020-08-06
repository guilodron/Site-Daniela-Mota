import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import styles from '../styles/index.module.css'
import Contact from '../components/Contact'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Services />
      <div className={styles.transition}></div>
      <Contact />
      <div className={styles.articles}>
        <h2>"O entendimento em direito condominial é essencial para a convivência."</h2>
        <Link href='/articles'><a><button>Confira meus artigos</button></a></Link>
      </div>
      <div id="media" className={styles.media}>
        <a href="https://www.youtube.com/channel/UCst5NmIjoU4kl2mqOObc83g" target="_blank">
          <div></div>
          {/* <img src="/assets/mediaBg.jpeg" alt="canal do youtube"></img> */}
        </a>
      </div>
    </Layout>
  )
}
