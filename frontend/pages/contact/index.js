import styles from "../../styles/Contact.module.scss";
import { useState } from "react";
import axios from "axios";


export default function Contact() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { name, email, subject, message} = values;

  const handleChange = e => 
  setValues({...values,[e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
   
    try {
         await fetch("http://localhost:3000/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
      });
      
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className={styles.container}>
        
          <div className={styles.header}>
            <h1 className={styles.title}>Get in touch</h1>
            <p className={styles.text}>
            Any question or remarks? Just write us a message!
          </p>
            <hr/>
          
          <div className={styles.contactWrapper}>
            <form className={styles.form} method="post" onSubmit={submitHandler}>
              <div className={styles.item}>
                <label className={styles.label} htmFor="name">Name:</label> 
                <input className={styles.input}  
                value={name}
                 type="text" name="name"
                 onChange={handleChange}  />
              </div>
              <div  className={styles.item}>
                <label className={styles.label} htmFor="email">Email:</label>
                <input className={styles.input} 
                 value={email}
                type="text" name="email" 
                onChange={handleChange}  />
              </div>
              <div  className={styles.item}>
                <label className={styles.label} htmFor="subject">Subject:</label>
                <input className={styles.input} 
                 value={subject}
                type="text" name="subject" 
                onChange={handleChange} />
              </div>
              <div  className={styles.item}>
                <label className={styles.label} htmFor="message">Message:</label>
                <textarea className={styles.textarea} name="message"
                 value={message}
                onChange={handleChange}  />
              </div>
              <div className={styles.center}>
                <button type="submit" className={styles.button}>
                Send
                </button>
              </div>
            </form>
          </div>
          </div>
        
    </div>
  )
}

