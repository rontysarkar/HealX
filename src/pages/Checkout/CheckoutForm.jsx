import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";



const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        totalPrice && axiosPrivate.post('create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosPrivate, totalPrice])


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
            console.log('PaymentMethod', paymentMethod);
            setError('')
        }

        const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous"
                }
            }
        })

        if (paymentIntent) {
            console.log("paymentIntent", paymentIntent)
            if (paymentIntent.status === 'succeeded') {
               
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your Successfully pad ${totalPrice}$`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        else {
            console.log("cardError", cardError)
        }
    };

    return (
        <>
            <h1 className=" text-xl uppercase py-10"> Total Price : {totalPrice} $</h1>
            <form onSubmit={handleSubmit}>
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
                <button className="hover:shadow-2xl hover:bg-cyan-700 mt-6 px-6 bg-cyan-400 text-white py-2 rounded-sm " type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <>
                    <p className="text-red-700 py-2">{error}</p>

                </>
            </form>
        </>
    );
};

export default CheckoutForm;