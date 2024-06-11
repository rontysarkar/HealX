import useAdvertise from "../../../Hooks/useAdvertise";
import SellerAdvertiseRow from "../../../components/SellerAdvertiseRow";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { FadeLoader } from "react-spinners";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const Advertise = () => {
    const { user } = useAuth()
    const [advertiseData, refetch] = useAdvertise()
    let [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const axiosPrivate = useAxiosPrivate()

    const myAdvertise = advertiseData.filter(add => add.sellerEmail === user?.email)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target

        const formData = new FormData()
        formData.append('image', form.image.files[0])
        const { data: imageBB } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB_hosting_key}`, formData)
        console.log(imageBB)
        const advertiseData = {
            medicineName: form.name.value,
            description: form.description.value,
            medicineImage: imageBB.data.display_url,
            sellerEmail: user?.email
        }
        const { data } = await axiosPrivate.post('advertise', advertiseData)
        if (data.insertedId) {
            refetch()
            closeModal()
            setLoading(false)
            toast.success('Advertise Added Successfully')
        }
    }

    const handleDeleteAdvertise = async (id) => {
        setLoading(true)
        const { data } = await axiosPrivate.delete(`advertise/${id}`)
        console.log(data)
        if (data.deletedCount > 0) {
            setLoading(false)
            refetch()
            toast.success('Advertise Deleted Successfully')
        }
    }
    return (
        <>
            <h1 className="text-3xl uppercase text-center py-8 font-semibold text-cyan-300">Manage Advertise</h1>
            <div className="flex flex-col max-w-6xl p-6 space-y-4 sm:p-10  dark:text-gray-800 mx-auto">
                {/* <h2 className="text-xl font-semibold">Your cart</h2> */}

                <div className="space-y-2  text-right">
                    <p className="uppercase font-bold text-xl  ">Total Advertise : {myAdvertise?.length}</p>
                    <button onClick={openModal} className=" mt-2 px-4 bg-cyan-400 hover:bg-cyan-800 text-white py-1 rounded-sm">Add Advertise</button>

                </div>

                <ul className="flex flex-col divide-y dark:divide-gray-300 ">

                    {
                        myAdvertise?.map(advertise => <SellerAdvertiseRow key={advertise._id} advertise={advertise} handleDeleteAdvertise ={handleDeleteAdvertise } />)
                    }
                </ul>


            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center my-4"
                                    >
                                        Add Advertise
                                    </Dialog.Title>
                                    <div className='relative'>
                                        {loading && <div className='absolute top-[30%] right-[40%]'><FadeLoader color="#36d7b7" /></div>}
                                        <form onSubmit={handleSubmit} className=' space-y-4 '>

                                            <div>
                                                <label className="block text-sm  ">Advertise Medicine Name:</label>
                                                <input required name='name' type="text" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  " />
                                            </div>
                                            <div>
                                                <label className="block text-sm  "> Advertise Description</label>
                                                <input required name='description' type="text" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  " />
                                            </div>
                                            <div>
                                                <label className="block text-sm  ">Advertise Image:</label>
                                                <input required name='image' type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  " />
                                            </div>

                                            <button type="submit" className="w-full py-2 font-semibold rounded bg-cyan-400 dark:text-gray-50  btn">Add </button>
                                        </form>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>



        </>
    );
};

export default Advertise;