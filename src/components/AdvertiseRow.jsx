
const AdvertiseRow = ({ advertise, handleDeleteSlide,openModal }) => {
    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between  ">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-60 sm:h-32 dark:bg-gray-500" src={advertise?.medicineImage} alt="Polaroid camera" />
                <div className=" w-full pb-4">
                    <div className="flex justify-between h-full items-center w-full pb-2 space-x-2 space-y-2">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold leading-snug sm:pr-8">{advertise.medicineName}</h3>
                            <p className="text-sm dark:text-gray-600">Seller Email : {advertise.sellerEmail}</p>
                            <p className="text-xs dark:text-gray-600">{advertise.description}</p>
                        </div>

                        <div className="text-right space-y-4 my-auto">
                            {/* <p className="text-lg font-semibold">{medicinePrice}$</p> */}
                            <div className="dropdown dropdown-left">
                                <div tabIndex={0} role="button" className="mt-2 px-4 mx-4 bg-cyan-300 text-white hover:bg-cyan-800 py-1 rounded-sm">Action</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li onClick={()=>openModal(advertise._id)} className="hover:bg-cyan-300 hover:text-white "><a>Add Slide</a></li>
                                    <li onClick={() => handleDeleteSlide(advertise._id)} className="hover:bg-red-600 hover:text-white "><a>Remove Slide</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </li>
    );
};

export default AdvertiseRow;