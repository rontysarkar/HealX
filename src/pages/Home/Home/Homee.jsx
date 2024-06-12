import { Helmet } from "react-helmet-async";
import Banner from "../Banners/Banner";
import Category from "../Category/Category";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import ClientSection from "../ClientSection/ClientSection";
import HealthSection from "../HealthSection/HealthSection";

const Home = () => {
    return (
        <div>
            <Helmet><title>HealX || Home</title></Helmet>
            <Banner/>
            <div className="container mx-auto my-20 ">
            <Category/>
            <DiscountProducts/>
            <HealthSection/>
            <ClientSection/>
            
            </div>
        </div>
    );
};

export default Home;