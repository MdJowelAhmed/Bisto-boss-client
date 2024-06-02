import { useEffect, useState } from "react";
import SectionTitle from "../../components/Share/Section title/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonals = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviewsData.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="my-12">
            <SectionTitle subHeader='Check our review' header='Testimonials'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div className="">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div>
                                {review.details}
                                <h2>{review.name} </h2>
                            </div>
                        </SwiperSlide>)

                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonals;