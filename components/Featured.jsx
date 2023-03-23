/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Featured.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Featured = () => {
  const images = [
    "/images/featured1.jpg",
    "/images/featured2.jpg",
    "/images/featured3.jpg",
    "/images/featured4.jpg",
  ];

  return (
    <div className={styles.imgContainer}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="Image 1" className={styles.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
