import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/Share/Section title/SectionTitle';

const Slide = () => {
    return (
        <div>
            <SectionTitle subHeader={"From 11.00 am to 10.00pm"}
                header={'Order Online'}>

            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-24 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='uppercase text-2xl font-semibold text-white -mt-20 text-center'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;