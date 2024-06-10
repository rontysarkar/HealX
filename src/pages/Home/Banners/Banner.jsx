// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import Slider from './Slider';

const Banner = () => {

  const banners = [
    {
      id:1,
      text:'Dedicated first aid kit for Families',
      image:'https://i.ibb.co/xgtHGRZ/img1.webp'
    },
    {  
      id:2,
      text:'Dedicated first aid kit for Families',
      image:'https://i.ibb.co/BcPt5Tf/1-2-Op-2u-g-TL1bq-So-Oh03-AVw.jpg'
    },
    {  
      medicineName:"table",
      description:'Dedicated first aid kit for Families',
      medicineImage:'https://i.ibb.co/BcPt5Tf/1-2-Op-2u-g-TL1bq-So-Oh03-AVw.jpg',
      sellerEmail :"ronty@gmail.com"
    }
  ]


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
          banners.map(banner => <SwiperSlide key={banner.id}><Slider  banner={banner}  /> </SwiperSlide>  )
        }

       
      </Swiper>
    </>
  );
};

export default Banner;