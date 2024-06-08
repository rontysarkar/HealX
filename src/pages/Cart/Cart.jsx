
import { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import CartRow from "./CartRow";
import toast from "react-hot-toast";

const Cart = () => {
    const [cartData,refetch] = useCart()
    const [price,setPrice] = useState()

    
    useEffect(()=>{
        const totalPrice = cartData.reduce((accumulator,currentValue)=> accumulator + currentValue.medicinePrice,0)
        setPrice(totalPrice)
    },[cartData])
   
   
    



    const handleDelete = async(id)=>{
        const {data} = await axiosSecure.delete(`cart/${id}`)
        console.log(data) 
        if(data.deletedCount > 0){
            refetch()
            toast.success('The item has been successfully deleted from your cart')
           
        }

    }
    return (
        <div className="flex flex-col max-w-6xl p-6 space-y-4 sm:p-10  dark:text-gray-800 mx-auto">
            {/* <h2 className="text-xl font-semibold">Your cart</h2> */}

            <div className="space-y-2 text-right">
                <p className="uppercase font-bold text-xl">Total amount :
                    <span className="font-semibold"> {price} $ </span>
                </p>
                <button className=" px-4 bg-cyan-400 text-white py-1 rounded-sm">Checkout</button>

            </div>

            <ul className="flex flex-col divide-y dark:divide-gray-300">
                {cartData?.map(medicine => <CartRow key={medicine._id} medicine={medicine} setPrice={setPrice} handleDelete={handleDelete} />)}
            </ul>

        </div>
    );
};

export default Cart;