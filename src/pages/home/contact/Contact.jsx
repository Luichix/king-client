import React from 'react'
import styles from './contact.module.css'
import word from '../../../data/contact.json'

function Contact() {
  const { form, contact } = word['es']
  return (
    <section id="Contacto" className={styles.section}>
      <h2 className={styles.title}>
        ¡Estaremos encantados con sus comentarios!
      </h2>
      <form className={styles.form}>
        <fieldset className={styles.data}>
          <label className={styles.label} htmlFor="name">
            {form.client}
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            autoComplete="off"
            required
          />
          <label className={styles.label} htmlFor="email">
            {form.email}
          </label>
          <input
            className={styles.input}
            id="email"
            type="text"
            autoComplete="off"
            required
          />
          <label className={styles.label} htmlFor="place">
            {form.place}
          </label>
          <input
            className={styles.input}
            id="place"
            type="text"
            autoComplete="off"
            required
          />
        </fieldset>
        <fieldset className={styles.data}>
          <label className={styles.label} htmlFor="message">
            {form.message}
          </label>
          <textarea className={styles.textarea} id="message" required />
          <button className={styles.button}>{form.submit}</button>
        </fieldset>
      </form>
      <hr className={styles.line}></hr>
      <div className={styles.contact}>
        {contact.map((e, i) => (
          <span key={i} className={styles.group}>
            <h3 className={styles.title}>{e[0]}</h3>
            <p>{e[1]}</p>
          </span>
        ))}
      </div>
      <hr className={styles.line}></hr>
    </section>
  )
}

export default Contact
