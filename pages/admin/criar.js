import React, {useEffect, useState, useCallback} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './createArticle.module.css';
import {GrTrash} from 'react-icons/gr';
import axios from 'axios';

const criar = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('/api/articles')
      .then(response => response.data)
      .then(artigos => setArticles(artigos))
  }, []);

  const deleteArrticle = useCallback(async (articleId) => { 
    console.log(articleId);
    await axios.delete('/api/articles', {data: {id: articleId}});
    setArticles(articles.filter(article => article._id !== articleId));

  });

  return (
    <>
      <h1>Artigos</h1>
      <Formik
        initialValues={{ title: '', subtitle: '', content: '' }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Obrigatório'
          }
          if (!values.subtitle) {
            errors.subtitle = 'Obrigatório'
          }
          if (!values.content) {
            errors.content = 'Obrigatório'
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const { title, subtitle, content } = values;
          const article = await axios.post('/api/articles', {
            title,
            subtitle,
            content
          });
          setArticles([...articles, article.data.article])
          alert(article.data.success ? 'criado com sucesso' : 'erro na criacao')
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.createForm}>
            <h2>Criar artigo</h2>
            <Field name="title" placeholder="Título" />
            <ErrorMessage name="title" component="div" />
            <Field name="subtitle" placeholder="Subtítulo" />
            <ErrorMessage name="subtitle" component="div" />
            <Field rows={25} name="content" placeholder="Conteúdo" component="textarea" />
            <ErrorMessage name="content" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Criar
            </button>
          </Form>
        )}
      </Formik>

      <div className={styles.articlesContainer}> 
          <h2>Apagar</h2>
          {articles && articles.map(article => (
            <div key={article._id} className={styles.article}>
              <div>
                <strong>{article.title}</strong>
                <span>{article.subtitle}</span>
                <span>{Intl.DateTimeFormat('pt-BR', 
                  {timeZone: 'America/Sao_Paulo', 
                  timeStyleimeSt: 'full',
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                  }).format(new Date(article.created_at))}</span>
              </div>
              <GrTrash onClick={() => deleteArrticle(article._id)}/>
            </div>
          ))}
      </div>
    </>
  );
}

export default criar;