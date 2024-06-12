import { Helmet } from "react-helmet-async";
import Banner from "../Banners/Banner";
import Category from "../Category/Category";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import ClientSection from "../ClientSection/ClientSection";

const Home = () => {
    return (
        <div>
            <Helmet><title>HealX || Home</title></Helmet>
            <Banner/>
            <div className="container mx-auto my-20 ">
            <Category/>
            <DiscountProducts/>
            <ClientSection/>
            </div>
        </div>
    );
};

export default Home;