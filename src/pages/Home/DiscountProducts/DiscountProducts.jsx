// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const DiscountProducts = () => {

    const discountProducts = [
        {
            "_id": "1",
            "name": "Dettol Antiseptic Liquid",
            "image": "https://i.ibb.co/J70NcTJ/209750-38ab860f-42f5-4836-88dc-96275677b841.webp",
            "price": 4.00,
            "discountPercentage": 10
        },
        {
            "_id": "2",
            "name": "Savlon Antiseptic Liquid",
            "image": "https://i.ibb.co/XYtk5Vq/savlon-Antiseptic-Disinfectant-Liquid-1ltr.jpg",
            "price": 3.50,
            "discountPercentage": 15
        },
        {
            "_id": "3",
            "name": "Listerine Mouthwash",
            "image": "https://i.ibb.co/dkzRSd6/G03.jpg",
            "price": 5.00,
            "discountPercentage": 5
        },
        {
            "_id": "4",
            "name": "Hand Sanitizer",
            "image": "https://i.ibb.co/BtFJ6yP/P-000433-1.jpg",
            "price": 2.50,
            "discountPercentage": 20
        },
        {
            "_id": "5",
            "name": "Himalaya Face Wash",
            "image": "https://i.ibb.co/QNtz5ng/64fefaab2b2fe029123097b2-himalaya-purifying-neem-face-wash-with.jpg",
            "price": 3.00,
            "discountPercentage": 25
        }
    ]



    return (
        < >
            <h1 className="text-3xl pl-20 my-10 ">Discount Products</h1>
            <Swiper

                slidesPerView={4}
                spaceBetween={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2000,

                }}
            >
                {
                    discountProducts.map(product => <SwiperSlide key={product._id} >
                        <div className="max-w-xs  hover:shadow-2xl  ">
                            <div className=' w-h-60 h-60  mx-auto'>
                                <img src={product.image} alt="" className="object-cover object-center h-full w-full mx-auto    dark:bg-gray-500" />
                                

                            </div>
                            <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-4 text-center">
                                    <h2 className="text-xl font-semibold tracking-wide">{product.name}</h2>
                                    <h2 className="  tracking-wide uppercase  bg-cyan-100 rounded-md">Discount {product.discountPercentage}% OFF</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </>
    );
};

export default DiscountProducts;