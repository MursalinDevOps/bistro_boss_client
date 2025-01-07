import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import SectionTitle from '../../../components/SectionTitle';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then((res) => res.json())
            .then((data) => setReviews(data))
    }, []);
    return (
        <div>
            <SectionTitle subTitle="---What Our Clients Say---" title="Testimonials"></SectionTitle>
            <div>
                <div className='flex justify-center my-16'>
                <p className='text-7xl '><FaQuoteLeft></FaQuoteLeft></p>
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    <div className='flex justify-center items-center'>
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>

                                <div className=' px-20'>
                                    <p className='text-lg'>{review.details}</p>
                                    <h3 className="text-3xl font-semibold text-[#d99827] text-center uppercase">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;