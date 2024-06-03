import Banner from "../Banners/Banner";
import Category from "../Category/Category";
import DiscountProducts from "../DiscountProducts/DiscountProducts";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="container mx-auto  ">
            <Category/>
            <DiscountProducts/>
            </div>
            <h1>home</h1>
        </div>
    );
};

export default Home;