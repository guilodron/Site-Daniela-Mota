import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from './articles.module.css';
import Axios from 'axios';
import PuffLoader from 'react-spinners/PuffLoader';
import { useState, useEffect } from 'react';

const Articles = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Axios.get('/api/articles')
      .then(response => response.data)
      .then(data => setArticles([...data]));
  }, []);

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
          {articles.length > 0 ? articles.map(article => (
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
          )) : <div className={styles.loading}><PuffLoader color='#968337'/></div>}
        </div>
      </main>
    </Layout>
  );
}

export default Articles;