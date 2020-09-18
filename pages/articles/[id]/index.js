import axios from 'axios';
import styles from './article.module.css';
import Link from 'next/link';
import Layout from '../../../components/Layout';
const Article = ({article}) => {

  return (
    <Layout>
      <main className={styles.articlePageContainer}>
        <ul className={styles.breadcrumb}>
          <li><Link href='/'><a>Página inicial</a></Link></li>
          <li> {'>'} </li>
          <li><Link href='/articles'><a>Todos os Artigos</a></Link></li>
          <li> {'>'} </li>
          <li>Artigo</li>
        </ul>
        <hr/>
        <div className={styles.article}>
          <h1>{article.title}</h1>
          <span>Publicado em {Intl.DateTimeFormat('pt-BR', 
                  {timeZone: 'America/Sao_Paulo', 
                  timeStyleimeSt: 'full',
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric'
                  }).format(new Date(article.created_at))}
          </span>
          <h2>{article.subtitle}</h2>
          <p dangerouslySetInnerHTML={{__html: article.content}} style={{whiteSpace: 'pre-wrap'}}></p>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {id} = context.query;
  const res = await axios.get(`https://danielamota.com.br/api/articles/${id}`);
  const article = res.data;
  return {
    props: {
      article
    }, // will be passed to the page component as props
  }
}

export default Article;