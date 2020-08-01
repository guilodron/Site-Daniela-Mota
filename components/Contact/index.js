import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './contact.module.css'
import {FiLinkedin, FiMail, FiInstagram, FiPhone} from 'react-icons/fi';
import axios from 'axios';

const Contact = () =>{

  return (
    <div id="contact" className={styles.contactContainer}>
      <h2 style={{fontSize: 48, color: "#E6D4A8", textAlign: 'center'}}>Entre em contato</h2>
      <div className={styles.contactItems}>
        <div className={styles.contactInfo}> 
          <div>
            <span><FiMail /> E-mail</span>
            <strong>danyelarodriguesmota@gmail.com</strong>
          </div>
          <div>
            <span><FiPhone /> Celular</span>
            <strong><a target="_blank" href="https://api.whatsapp.com/send?phone=5561983563737&text=Ol%C3%A1%20Dra.%20Daniela%2C%20">(61) 98356-3737</a></strong>
          </div>
          <div>
            <span><FiInstagram /> Instagram</span>
            <strong><a target="_blank" href="https://www.instagram.com/danielamota.adv/">@danielamota.adv</a></strong>
          </div>
          <div>
            <span><FiLinkedin /> Linkedin</span>
            <strong><a target="_blank" href="https://www.linkedin.com/in/danielamotaadv/">Daniela Mota</a></strong>
          </div>
        </div>
        <div className={styles.contactForm}>
          <span style={{marginBottom: 10, color: '#E6D4A8', fontSize: 24}}>Envie uma mensagem</span>
          <Formik
            initialValues={{ name: '', emailOrPhone: '', text: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = "Campo obrigatório" ;
              }
              if (!values.emailOrPhone) {
                errors.emailOrPhone = "Campo obrigatório" ;
              }
              if (!values.text) {
                errors.text = "Campo obrigatório" ;
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await axios.post('/api/mail', {
                name: values.name,
                emailOrPhone: values.emailOrPhone,
                text: values.text,
              });
              alert('Mensagem Enviada!')
              setSubmitting(false);
            }}
          >
          {({ isSubmitting }) => (
            <Form>
              <Field name="name" placeholder="Seu nome"/>
              <ErrorMessage name="name" component="div" />
              <Field name="emailOrPhone" placeholder="Email e/ou telefone para contato" />
              <ErrorMessage name="emailOrPhone" component="div" />
              <Field component="textarea" rows={7} placeholder="Digite sua mensagem" name="text" />
              <ErrorMessage name="text" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </Form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contact;