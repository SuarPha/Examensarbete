import styles from "../../styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.wrapper}>
        <h1>MENU</h1>
            <h2>WHAT’S SPECIAL!</h2>
            <hr/>
            BUILD A PIE
           
            <span> PERSONAL </span>
<p>1 TOPPING SEK 129.00 ———- UNLIMITED SEK 149.00 <br/>
            <span> MEDIUM </span>
1 TOPPING SEK 119.00 ———- UNLIMITED SEK 149.00 <br/>
            <span> GLUTEN FREE  </span>
1 TOPPING SEK 129.00 ———- UNLIMITED SEK 159.00 <br/>
            <span> CALZONE </span>
 3 TOPPING : SEK 15.00———– 5 TOPPING : SEK 20.00 <br/>
</p>
        </div>
        
    </div>
  )
}

export default Menu