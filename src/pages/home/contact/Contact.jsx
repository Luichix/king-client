import React from 'react'
import style from '../css/module/contact.module.css'

function Contact({ contact, form }) {
  return (
    <section id='Contacto' className={style.section}>
      <h2 className={style.title}>¡Estaremos encantados con sus comentarios!</h2>
      <form className={style.form}>
        <fieldset className={style.data} >
          <label htmlFor='name'>{form.client}</label>
          <input id='name' type='text' autoComplete='off' required/>
          <label htmlFor='email' >{form.email}</label>
          <input id='email' type='text' autoComplete='off' required />
          <label htmlFor='place'>{form.place}</label>
          <input id='place' type='text' autoComplete='off' required/>
        </fieldset>
        <fieldset className={style.data}>
          <label htmlFor='message'>{form.message}</label>
          <textarea id='message' required/>
          <button>{form.submit}</button>
        </fieldset>
      </form>
      <hr className={style.line}></hr>
      <div className={style.contact} >
        {contact.map((e,i) => (
          <span key={i} className={style.group}>
            <h3 className={style.title}>{e[0]}</h3>
            <p>{e[1]}</p>
          </span>
        ))}
      </div>
      <hr className={style.line}></hr>
    </section>
  )
}

export default Contact