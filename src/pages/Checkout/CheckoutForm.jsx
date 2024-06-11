import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState('')


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
    };

    return (

            <form  onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="hover:shadow-lg mt-6 px-6 bg-cyan-400 text-white py-2 rounded-sm " type="submit" disabled={!stripe}>
                    Pay
                </button>
                <>
                <p className="text-red-700 py-2">{error}</p>
                </>
            </form>

    );
};

export default CheckoutForm;