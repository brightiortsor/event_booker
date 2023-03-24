import Image from "next/image";
import styles from "../styles/Footer.module.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image src="/images/logo.png" width={80} height={80} alt="logo" />
        <h3 className={styles.name}>SpicyPizza</h3>
        <h6 className={styles.motto}>Well baked pizza slices</h6>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <p className={styles.text}>
              1654 R. Don Road.
              <br /> Maitama, 85022
              <br /> (602) 867-1010
            </p>
            <p className={styles.text}>
              2356 K. Laquie Rd.
              <br /> WuseII, 85022
              <br /> (602) 867-1011
            </p>
            <p className={styles.text}>
              1614 E. Erwin St.
              <br />
              Jabi, 85022
              <br /> (602) 867-1012
            </p>
          </div>
          <div className={styles.socials}>
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
            <span>
              <FaTwitterSquare />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
          <p className={styles.phone}>080SPICYPIZZA</p>
        </div>
      </div>
      <div className={styles.hours}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <div className={styles.hoursContent}>
          <p className={styles.text1}>
            MONDAY - FRIDAY
            <br /> 9:00am – 10:00pm
          </p>
          <p className={styles.text2}>
            SATURDAY - SUNDAY
            <br /> 10:00pm – 10:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
