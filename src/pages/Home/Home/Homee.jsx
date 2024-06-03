import Banner from "../Banners/Banner";
import Category from "../Category/Category";
import DiscountProducts from "../DiscountProducts/DiscountProducts";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="container mx-auto my-20 ">
            <Category/>
            <DiscountProducts/>
            </div>
        </div>
    );
};

export default Home;