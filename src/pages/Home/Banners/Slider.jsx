import PropTypes from 'prop-types';
const Slider = ({ img, text }) => {
    return (
        
        <div className={` w-full bg-center bg-cover h-[40rem] bg-no-repeat `}
            style={
                {
                    backgroundImage: `url(${img})`
                }
            }
        >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center">
                    <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl font-extrabold text-white lg:text-4xl">{text}</h1>
                    {/* <h1 data-aos="fade-left" data-aos-duration="1000" className="text-xl py-4 text-white lg:text-3xl ">From Your Favorite Restaurants!</h1> */}
                    {/* <Link to={'/allFoods'}> <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md lg:w-auto hover:bg-primary focus:outline-none focus:bg-primary">All Foods</button> </Link> */}
                </div>
            </div>
        </div>
        
    );
};

Slider.propTypes={
    img:PropTypes.img,
    text:PropTypes.text
}

export default Slider;