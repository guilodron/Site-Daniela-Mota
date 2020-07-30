import Layout from '../components/Layout'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Banner />
      <About />
      <Services />
    </Layout>
  )
}
