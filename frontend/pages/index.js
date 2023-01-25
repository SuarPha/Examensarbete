import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import Offer from '../components/Offer';
import Service from '../components/Services';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.scss';
 



export default function Home({pizzaList}) {

  return (
    
    <div className={styles.container}>

      <Head>
        <title>Online Pizzarie</title>
        <meta name="description" content="Best pizza restaurant in Järna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <Offer/>
      <Service/>
      <PizzaList pizzaList={pizzaList} />

      </div>
   
  );
}
// Fetch API:er
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:{
      pizzaList:res.data
    }
  }
}