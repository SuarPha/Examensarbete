import styles from "../styles/ContactForm.module.scss"

const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.grid}>
            <form method="post">
                <label htmFor="name">Name</label>
            </form>
        </div>
    </div>
  )
}

export default Contact