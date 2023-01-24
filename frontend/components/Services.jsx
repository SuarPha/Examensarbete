import styles from "../styles/Services.module.scss"
import Image from "next/image"


const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <h1  className={styles.title}>Our Services</h1>
          
            <div className={styles.rowIcons}>
            <div  className={styles.icons}>
                <div className={styles.icon}>
                    <Image src="/img/order.png" width="250" height="250" alt=""/>
                    <h2 className={styles.textTitle}>Order Your Food</h2>
                    <p className={styles.textDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className={styles.icon}>
                    <Image src="/img/delivery.png" width="250" height="250" alt=""/>
                    <h2 className={styles.textTitle}>Delivery or pick up</h2>
                    <p className={styles.textDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className={styles.icon}>
                    <Image src="/img/receipe.png" width="250" height="250" alt=""/>
                    <h2 className={styles.textTitle}>Delicious Receipe</h2>
                    <p className={styles.textDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                </div>
                </div>
            </div>
     
    </div>
  )
}

export default Services