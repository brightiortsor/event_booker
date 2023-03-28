import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
import axios from "axios";
import Head from "next/head";

export default function Home({ pizzaList }) {
  return (
    <div>
      <Head>
        <title>Pizza Hut Abuja</title>
        <meta name="description" content="Best Pizza outlet in Abuja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Featured /> */}
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3001/api/products");

  return {
    props: {
      pizzaList: res.data,
    },
  };
};
