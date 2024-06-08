import { useState } from "react";

const CartRow = ({ medicine, handleDelete,setPrice }) => {
    const { medicineImage, medicineCompany, medicineName, medicinePrice } = medicine
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1)
            setPrice(prevPrice => prevPrice + medicinePrice)
        }

    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)
            setPrice(prevPrice => prevPrice - medicinePrice)
        }

    }
    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between  ">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={medicineImage} alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{medicineName}</h3>
                            <p className="text-sm dark:text-gray-600">{medicineCompany}</p>
                        </div>

                        <div className="text-right space-y-4">
                            <p className="text-lg font-semibold">{medicinePrice}$</p>
                            <div>
                                {/* quantity increment decrement */}
                                <form className="max-w-xs mx-auto">
                                    {/* <label className="block mb-2 text-sm font-medium ">Choose quantity:</label> */}
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button onClick={handleDecrement} type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div className="px-2 bg-gray-50 border-x-0 border-gray-300 h-11 text-center   text-sm   block w-full py-2.5     ">
                                            {quantity}
                                        </div>
                                        {/* <input type="text" value={quantity}  /> */}
                                        <button onClick={handleIncrement} type="button" className="bg-gray-100    border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div onClick={() => handleDelete(medicine._id)} className="flex text-sm divide-x">
                        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                        </button>

                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartRow;