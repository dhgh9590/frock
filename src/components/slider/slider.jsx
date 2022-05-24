import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.css';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
        loop={true}
        autoplay={{delay: 4000,disableOnInteraction: true,}}
        pagination={{type: "fraction",}}
        navigation={true}
        allowTouchMove={false}
        modules={[Pagination, Navigation, Autoplay]}
        speed = {2000}
        direction={"vertical"}
        className="mySwiper"
    >
        <SwiperSlide>
            <article className={`${styles.article1} ${styles.article} article`}>
                <div className={`${styles.left_box} left_box`}>
                    <div className={`${styles.left_box_img} left_box_img`}></div>
                </div>
                <div className={`${styles.right_box} right_box`}>
                    <em>SPRING / SUMMER 2022</em>
                    <strong>Women’s Collection</strong>
                    <ul>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider1_2.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider1_3.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider1_4.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider1_5.png`} alt="" /></li>
                    </ul>
                </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className={`${styles.article2} ${styles.article} article`}>
                <div className={`${styles.left_box} left_box`}>
                    <div className={`${styles.left_box_img} left_box_img`}></div>
                </div>
                <div className={`${styles.right_box} right_box`}>
                    <em>SPRING / SUMMER 2022</em>
                    <strong>Women’s Collection</strong>
                    <ul>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider2_2.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider2_3.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider2_4.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider2_5.png`} alt="" /></li>
                    </ul>
                </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className={`${styles.article3} ${styles.article} article`}>
                <div className={`${styles.left_box} left_box`}>
                    <div className={`${styles.left_box_img} left_box_img`}></div>
                </div>
                <div className={`${styles.right_box} right_box`}>
                    <em>SPRING / SUMMER 2022</em>
                    <strong>Women’s Collection</strong>
                    <ul>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider3_2.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider3_3.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider3_4.png`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/slider3_5.png`} alt="" /></li>
                    </ul>
                </div>
            </article>
        </SwiperSlide>
        <div className={styles.text_box}>
            <h2 className={styles.title}><p>Sunset</p><p>Shades</p></h2>
            <em className={styles.text}>DISCOVER</em>
        </div>
    </Swiper>
  );
};