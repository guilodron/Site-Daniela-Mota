import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from './articles.module.css';
import Axios from 'axios';

const Articles = ({articles}) => {
  return (
    <Layout>
      <main className={styles.articlePageContainer}>
        <ul className={styles.breadcrumb}>
          <li><Link href='/'><a>Página inicial</a></Link></li>
          <li> {'>'} </li>
          <li>Todos os artigos</li>
        </ul>
        <hr/>
        <span className={styles.results}>Exibindo <strong>{articles.length} </strong> resultados.</span>
        <div className={styles.articlesContainer}>
          {articles.map(article => (
            <div key={article._id} className={styles.articleCell}>
              <strong><Link href={`/articles/${article._id}`}><a>{article.title}</a></Link></strong>
              <span>{article.subtitle}</span>
              <p>{article.content.slice(0, 469)} {'{...}'}</p>
              <span>{Intl.DateTimeFormat('pt-BR', 
                  {timeZone: 'America/Sao_Paulo', 
                  timeStyleimeSt: 'full',
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric'
                  }).format(new Date(article.created_at))}</span>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await Axios.get('https://danielamota.com.br/api/articles');
  const articles = res.data;
  return {
    props: {
      articles
    }, // will be passed to the page component as props
  }
}

export default Articles;