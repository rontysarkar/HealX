
const SellerAdvertiseRow = ({advertise}) => {
    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between  ">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-60 sm:h-32 dark:bg-gray-500" src={advertise?.medicineImage} alt="Polaroid camera" />
                <div className=" w-full pb-4">
                    <div className="flex justify-between h-full items-center w-full pb-2 space-x-2 space-y-2">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold leading-snug sm:pr-8 uppercase">{advertise.medicineName}</h3>
                            <p className="text-xs dark:text-gray-600">{advertise.description}</p>
                        </div>

                        <div className="text-right space-y-4 my-auto">
                            {/* <p className="text-lg font-semibold">{medicinePrice}$</p> */}
                            

                        </div>
                    </div>
                    
                </div>
            </div>
        </li>
    );
};

export default SellerAdvertiseRow;