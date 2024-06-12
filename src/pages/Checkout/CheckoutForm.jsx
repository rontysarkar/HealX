import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";



const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const axiosPrivate = useAxiosPrivate()
    const [cartData,refetch] = useCart()
    const [loading,setLoading] = useState(false)
    const Navigate = useNavigate()

    useEffect(() => {
         if(totalPrice > 0){
            axiosPrivate.post('create-payment-intent', { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
         }
    }, [axiosPrivate, totalPrice])


    const handleSubmit = async (event) => {
        setLoading(true)
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            setLoading(false)
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            setLoading(false)
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setLoading(false)
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
                

                // Save the payment in database 
                const payment = {
                    email:user?.email,
                    price:totalPrice,
                    transactionId:paymentIntent.id,
                    date: new Date(),
                    cartIds: cartData.map(item=>item._id),
                    medicineIds:cartData.map(medicine=>medicine.medicineId),
                    status:'pending'
                }

                const {data} = await axiosPrivate.post('payment',payment)
                console.log('payment data post ',data)
                if(data.paymentResult.insertedId){
                    refetch()
                    setLoading(false)
                    Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your Successfully pad ${totalPrice}$`,
                    showConfirmButton: false,
                    timer: 1500
                    
                });
                Navigate('/invoice')
                }
                
                

            }
        }
        else {
            console.log("cardError", cardError)
        }
    };

    return (
        <>
            <h1 className=" text-xl uppercase py-10"> Total Price : {totalPrice} $</h1>
            {loading && <div className='absolute top-1/3 right-1/2 '><FadeLoader   color="#36d7b7" /></div>}
            <form onSubmit={handleSubmit}>
                <CardElement className="border p-4"
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