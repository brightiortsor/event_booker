import styles from "@/styles/Home.module.css";
import Axios from "axios";

const Home = ({ coinData }) => {
  console.log(coinData);
  return (
    <>
      <h1>Top 100 Cryptocurrencies</h1>
      {coinData.coins.map((coin) => {
        return (
          <div key={coin.id}>
            <img src={coin.icon} alt={coin.name} />
            <h1>{coin.name}</h1>
            <p>{coin.symbol}</p>
            <p>{coin.price}</p>
          </div>
        );
      })}
    </>
  );
};
export const getStaticProps = async () => {
  const response = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: response.data,
    },
  };
};
export default Home;
