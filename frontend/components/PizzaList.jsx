import styles from "../styles/PizzaList.module.scss"
import PizzaCard from "./PizzaCard"


const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        
                <h1 className={styles.title}> SELECTED PIZZAS </h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         
                <hr />
                 <div className={styles.wrapper}> 
                    {pizzaList?.map((pizza) => (
                      <PizzaCard key={pizza._id} pizza={pizza}/>
                    ))} 
                 </div>     
    </div>
  )
}

export default PizzaList
