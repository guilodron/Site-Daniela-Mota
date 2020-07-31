import Layout from '../components/Layout'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import styles from '../styles/index.module.css'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Banner />
      <About />
      <Services />
      <div className={styles.transition}></div>
      <Contact />
    </Layout>
  )
}
