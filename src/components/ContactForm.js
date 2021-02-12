import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import '../stylesheets/ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    console.log(formData)
  }

  const onButtonClickHandler = () => {
    window.alert('Thank you! Your message has been sent. I will get back to you as soon as possible. ')
  };

  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    onButtonClickHandler()
  }

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-ienaberlin.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="contact-text"> 
          <p>
            Want to get in contact for a collaboration or because you have some questions? Please fill out the form below and I will get back to you as soon as possible.
          </p>
          </div>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            onChange={updateInput}
            value={formData.name || ''}
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <textarea
            type="text"
            name="message"
            placeholder="MESSAGE"
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
          <button className="buttonForm" type="submit" onClick={onButtonClickHandler}>Submit</button>
        </form>
      </div>
  )
}

export default ContactForm