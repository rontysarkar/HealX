import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useMedicine from "../../../Hooks/useMedicine";
import MedicineRow from "../../../components/MedicineRow";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const MedicineManage = () => {
    const [medicines,refetch] = useMedicine()
    const { user } = useAuth()
    const { register, handleSubmit } = useForm()
    let [isOpen, setIsOpen] = useState(false)
    const [loading,setLoading] = useState(false)
    const axiosPrivate = useAxiosPrivate()




    const myMedicine = medicines?.filter(m => m.sellerEmail === user?.email)


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const onSubmit = async (data) => {
        setLoading(true)
        // console.log(data.image)
        const formData = new FormData()
        formData.append('image',data.image[0])
        console.log(formData)
        const {data : imageBB} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB_hosting_key}`,formData)
        // const {data :imageBB} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB_hosting_key}`,formData)
        console.log(imageBB)
        data.image = imageBB.data.display_url;
        data.price = parseFloat(data.price);
        data.discount = parseFloat(data.discount)
        data.sellerEmail = user?.email

        const {data:addMedicine} = await axiosPrivate.post('medicines',data)
        console.log(addMedicine)
        if(addMedicine.insertedId){
            closeModal()
            refetch()
            setLoading(false)
            toast.success('Medicine Add Successfully')
        }
        

    }

    const handleDelete =async (id) =>{
        const {data} = await axiosPrivate.delete(`medicine/${id}`)
        if(data.deletedCount > 0){
            refetch()
            toast.success('Medicine Delete Successfully')
        }
    }
    return (
        <>
            <h1 className="text-3xl uppercase text-center py-6 font-semibold text-cyan-300">Manage Medicine</h1>
            <div className="flex flex-col max-w-6xl p-6 space-y-4 sm:p-10  dark:text-gray-800 mx-auto">



                <div className="space-y-2  text-right">
                    <p className="uppercase font-bold text-xl ">Total Medicine : {myMedicine?.length}</p>
                    <button onClick={openModal} className=" mt-2 px-4 bg-cyan-400 hover:bg-cyan-800 text-white py-1 rounded-sm">Add Medicine</button>

                </div>

                <ul className="flex flex-col divide-y dark:divide-gray-300 ">
                    {
                        myMedicine?.map(medicine => <MedicineRow key={medicine._id} medicine={medicine} handleDelete={handleDelete} />)
                    }
                </ul>


            </div>


            {/* modal  */}

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
                                <Dialog.Panel className="  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center my-2"
                                    >
                                        Add Category
                                    </Dialog.Title> */}
                                    <div className='relative'>
                                        {loading && <div className='absolute top-[40%] right-[45%]'><FadeLoader color="#36d7b7" /></div>}
                                        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto  ">
                                            <div className="  rounded-md      ">
                                                <h1 className="text-center text-3xl font-bold  opacity-80">Add Medicine</h1>
                                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-10 px-20 ">


                                                    <div className="col-span-full sm:col-span-3">
                                                        <label className="text-sm">Medicine Name</label>
                                                        <input required {...register("name")} type="text" placeholder="Medicine Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label className="text-sm">Generic Name</label>
                                                        <input {...register("genericName")} type="text" placeholder="Generic Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label className="text-sm">Medicine Category</label>
                                                        {/* <input  type="text" placeholder="Medicine Category"  /> */}
                                                        <select required {...register("categoryName")} placeholder="Medicine Category" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                                                            <option value="Tablet">Tablet</option>
                                                            <option value="Syrup">Syrup</option>
                                                            <option value="Capsule">Capsule</option>
                                                            <option value="Injection">Injection</option>
                                                            <option value="Vitamins">Vitamins</option>
                                                            <option  value="Others">Others</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="city" className="text-sm">Company Name</label>
                                                        <select required {...register("company")}  className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                                                            <option value="Novartis">Novartis</option>
                                                            <option value="Lantus">Lantus</option>
                                                            <option value="Amoxil">Amoxil</option>
                                                            <option value="Robitussin">Robitussin</option>
                                                            <option value="GlaxoSmithKline">GlaxoSmithKline</option>
                                                            <option  value="Others">Others</option>
                                                        </select>
                                                    </div>

                                                    
                                                    <div className="col-span-full">
                                                        <label htmlFor="address" className="text-sm">Short description</label>
                                                        <textarea  {...register("description")} type='text' placeholder="Short description" className="w-full rounded-md focus:ring  h-20 p-4 border " ></textarea>
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label className="text-sm">Price</label>
                                                        <input required {...register("price")} type="text" placeholder="Price" className="w-full rounded-md focus:ring  h-14 px-4 border" />
                                                    </div>
                                                    
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="zip" className="text-sm">Discount</label>
                                                        <input {...register("discount")} type="text" placeholder="Discount" defaultValue={0} className="w-full rounded-md focus:ring  h-14 px-4 border" />
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="city" className="text-sm">Upload image</label>
                                                        <input required {...register("image")} type="file" className="block w-full px-3 py-3  h-14 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  " />
                                                    </div>
                                                    <div className="col-span-full sm:col-span-3">
                                                        <label htmlFor="zip" className="text-sm">Unit</label>
                                                        <input {...register("unit")} type="text" placeholder="Mg or Ml"  className="w-full rounded-md focus:ring  h-14 px-4 border" />
                                                    </div>


                                                    <div className="col-span-full">
                                                        <input type="submit" value="Add Food" className="btn w-full mt-6 text-white  bg-cyan-300" />
                                                    </div>



                                                </div>
                                            </div>

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

export default MedicineManage;