// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import Slider from './Slider';
import useAdvertise from '../../../Hooks/useAdvertise';

const Banner = () => {
  const [advertiseData] = useAdvertise()

 


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          advertiseData?.map(banner => <SwiperSlide key={banner._id}><Slider  banner={banner}  /> </SwiperSlide>  )
        }

       
      </Swiper>
    </>
  );
};

export default Banner;