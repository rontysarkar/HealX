import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
const Checkout = () => {
    const location = useLocation()
    const totalPrice = location?.state;
    
    return (
        <div className="lg:w-[1000px] mx-auto">
            <h1 className="uppercase text-3xl text-center py-10 text-cyan-300  ">Payment </h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm totalPrice={totalPrice} />
            </Elements>
        </div>
    );
};

export default Checkout;